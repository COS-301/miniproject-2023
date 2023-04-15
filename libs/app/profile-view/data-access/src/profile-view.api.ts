import { Injectable } from "@angular/core";
import { Functions, httpsCallable } from '@angular/fire/functions';
import { IUser } from "@mp/api/users/util";
import { doc, docData, Firestore } from "@angular/fire/firestore";
import { IGetProfileRequest, IGetProfileResponse } from "@mp/api/profiles/util";

@Injectable()
export class ProfileViewApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  profileView$(id: string) {
    const docRef = doc(
      this.firestore,
      `users/${id}`
    ).withConverter<IUser>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IUser;
      },
      toFirestore: (it: IUser) => it,
    });
    return docData(docRef, { idField: 'id' });
  }

  async getUserProfile(request: IGetProfileRequest) {
    return await httpsCallable<
      IGetProfileRequest,
      IGetProfileResponse
    >(
      this.functions,
      'getUserProfile'
    )(request);
  }

  // async getDeadMemories(request: IGetDeadMemoriesRequest) {
  //   return await httpsCallable<
  //     IGetDeadMemoriesRequest,
  //     IGetDeadMemoriesResponse
  //   >(
  //     this.functions,
  //     'getDeadMemories'
  //   )(request);
  // }

  // async reviveMemory(request: IReviveMemoryRequest) {
  //   return await httpsCallable<
  //     IReviveMemoryRequest,
  //     IReviveMemoryResponse
  //   >(
  //     this.functions,
  //     'reviveMemory'
  //   )(request);
  // }

  // async createMemory(request: ICreateMemoryRequest) {
  //   return await httpsCallable<
  //     ICreateMemoryRequest,
  //     ICreateMemoryResponse
  //   >(
  //     this.functions,
  //     'createMemory'
  //   )(request);
  // }

  // async getComments(request: IGetCommentsRequest) {
  //   return await httpsCallable<
  //     IGetCommentsRequest,
  //     IGetCommentsResponse
  //   >(
  //     this.functions,
  //     'getComments'
  //   )(request);
  // }
}