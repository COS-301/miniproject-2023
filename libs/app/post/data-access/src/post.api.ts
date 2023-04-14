import { Injectable } from "@angular/core";
import { Functions, httpsCallable } from '@angular/fire/functions';
import { Firestore } from '@angular/fire/firestore';
import {
  ICreatePostRequest, ICreatePostResponse,
} from '@mp/api/postss/util';
@Injectable()
export class PostApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) { }
  async createPost(request: ICreatePostRequest) {
    console.log('API createPost called with request:', request);
    return await httpsCallable<
      ICreatePostRequest,
      ICreatePostResponse
    >(
      this.functions,
      'createPost'
    )(request);
  }
}