import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, query, where } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { updateDoc, getDoc } from "firebase/firestore";

import {
  IGetPostRequest,
  IGetPostResponse,
  IPost,
  IPosts
} from '@mp/api/postss/util';
import { PostState } from './post.state';

@Injectable()
export class PostApi {
 
  
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) { }

  post$(id: string) {
    const docRef = doc(
      this.firestore,
      `posts/${id}`
    ).withConverter<IPost>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IPost;
      },
      toFirestore: (it: IPost) => it,
    });
    return docData(docRef, { idField: 'postID' });
  }

  /* Query for posts by userId -> read only */
  /* returns an array of the fetched IPost objects */
  async getPostByUserId(userId: string): Promise<IPosts> {
    const postsQuery = query(
      collection(this.firestore, 'posts'),
      where('createdBy', '==', userId)
    ).withConverter<IPost>({
      fromFirestore: (snapshot) => {
        return {
          ...snapshot.data(),
          postID: snapshot.id,
        } as IPost;
      },
      toFirestore: (it: IPost) => it,
    });
    
    const posts = await collectionData<IPost>(postsQuery, { idField: 'postID' }).toPromise();
    return { posts: posts ?? [] };
  }

  async likePost(postID: string): Promise<IPost> {
    const docRef = doc(
      this.firestore,
      `posts/${postID}`
    ).withConverter<IPost>({
      fromFirestore: (snapshot) => {
        return {
          ...snapshot.data(),
          postID: snapshot.id,
        } as IPost;
      },
      toFirestore: (it: IPost) => it,
    })
  
    const post = await docData(docRef).toPromise();
    if (!post) {
      throw new Error(`Post with ID ${postID} not found`);
    }
    const newLikeCount = post.likes + 1;

    await updateDoc(docRef, { likes: newLikeCount } ); 
  
    return { ...post, likes: newLikeCount };
  }

  async commentOnPost(postID: string, comment: string): Promise<IPost> {
    const postRef = doc(this.firestore, `posts/${postID}`);
    const postSnapshot = await getDoc(postRef);
  
    if (postSnapshot.exists()) {
      const post = postSnapshot.data() as IPost;
      const newCommentList = [...post.comments ?? [], comment];
  
      await updateDoc( postRef, { comments: newCommentList });
  
      return { ...post, comments: newCommentList };
    } else {
      throw new Error(`Post with ID ${postID} does not exist`);
    }
  }

  async buyPost(postID: string, buyerID: string): Promise<IPost> {
    const postRef = doc(this.firestore, `posts/${postID}`);
    const postSnapshot = await getDoc(postRef);
  
    if (postSnapshot.exists()) {
      const post = postSnapshot.data() as IPost;
  
      if (post.buyerID === null) {
        const updatedPost = {
          ...post,
          buyerID: buyerID,
          boughtAt: new Date(),
        };

        await updateDoc( postRef, updatedPost);
        return updatedPost;
      } else {
        throw new Error(`Post with ID ${postID} has already been bought`); // this will need further discussion
      }
    } else {
      throw new Error(`Post with ID ${postID} does not exist`);
    }
  }

}
