import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, query, where } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
  IGetPostRequest,
  IGetPostResponse,
  IPost,
  IPosts
} from '@mp/api/postss/util';
import { PostsState } from './post.state';

// import {
//     Hashtag
//   } from './api/postss/util';

export enum Hashtag {
  NATURE = '#nature',
  FUNNY = '#funny',
  OPINION = '#opinion',
  MUSIC = '#music',
  SPORTS = '#sports',
  FOOD = '#food',
  OTHER = '#other'
}

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

  /* Query for posts by hashtag -> read only */
  /* returns an array of the fetched IPost objects filtered by hashtag */
  async getPostByHashtag(hashtag: Hashtag): Promise<IPosts> {
    const postsQuery = query(
      collection(this.firestore, 'posts'),
      where('hashtag', '==', hashtag)
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



  /*
  Example for real-time read
  profile$(id: string) {
    const docRef = doc(
      this.firestore,
      `profiles/${id}`
    ).withConverter<IProfile>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IProfile;
      },
      toFirestore: (it: IProfile) => it,
    });
    return docData(docRef, { idField: 'id' });
  }
  */

  /*
  Example for Request Response API 
  async updateAccountDetails(request: IUpdateAccountDetailsRequest) {
    return await httpsCallable<
      IUpdateAccountDetailsRequest,
      IUpdateAccountDetailsResponse
    >(
      this.functions,
      'updateAccountDetails'
    )(request);
  }
  */

}
