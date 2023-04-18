import { Injectable } from "@angular/core";
import { Functions, httpsCallable } from '@angular/fire/functions';
import { IMemory } from "@mp/api/memories/util";
import { doc, docData, Firestore } from "@angular/fire/firestore";
import { ICreateMemoryRequest, ICreateMemoryResponse } from "@mp/api/memories/util";

@Injectable()
export class AddMemoryApi {
  /*constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  UserView$(id: string) {
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
  }*/
}
