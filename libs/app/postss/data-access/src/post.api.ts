import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
  IPost,
  IPosts
} from '@mp/api/postss/util';
import { PostsState } from './post.state';

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
