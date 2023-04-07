import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
  FilterList,
  Post,
  PostList,
  TimeModification,
  UserTime,
  FetchPostsRequest,
  FetchPostsResponse
} from '@mp/api/feed/util';

@Injectable()
export class FeedApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  // async fetchPosts(posts: FetchPostsRequest){
  //   return await httpsCallable<FetchPostsRequest, FetchPostsResponse>(
  //     this.functions,
  //     'fetchPosts'
  //   )(posts);
  // }

}
