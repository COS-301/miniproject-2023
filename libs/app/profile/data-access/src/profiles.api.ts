import { Injectable } from '@angular/core';
import { collection, doc, docData, Firestore, collectionData } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
    IProfile,
    IPostDetails,
    IAddPostRequest,
    IAddPostResponse,
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    IUpdateAddressDetailsRequest,
    IUpdateAddressDetailsResponse,
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    IUpdateOccupationDetailsRequest,
    IUpdateOccupationDetailsResponse,
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse,
    ICreatePostResponse,
    ICreatePostRequest
} from '@mp/api/profiles/util';
import { combineLatest, map } from 'rxjs';

@Injectable()
export class ProfilesApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  // profile$(id: string) {
  //   const docRef = doc(
  //     this.firestore,
  //     `profiles/${id}`
  //   ).withConverter<IProfile>({
  //     fromFirestore: (snapshot) => {
  //       return snapshot.data() as IProfile;
  //     },
  //     toFirestore: (it: IProfile) => it,
  //   });
  //   return docData(docRef, { idField: 'id' });
  // }

  profile$(id: string) {
    const profileDocRef = doc(
      this.firestore,
      `profiles/${id}`
    ).withConverter<IProfile>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IProfile;
      },
      toFirestore: (it: IProfile) => it,
    });
  
    const postsCollectionRef = collection(
      this.firestore,
      `profiles/${id}/posts`
    ).withConverter<IPostDetails>({
      fromFirestore: (snapshot) => {
        return snapshot.data() as IPostDetails;
      },
      toFirestore: (it: IPostDetails) => it,
    });
  
    return combineLatest([
      docData(profileDocRef, { idField: 'id' }),
      collectionData(postsCollectionRef, { idField: 'id' }),
    ]).pipe(
      map(([profile, posts]) => {
        return { ...profile, posts } as IProfile;
      })
    );
    
  }
  

  async updateAccountDetails(request: IUpdateAccountDetailsRequest) {
    return await httpsCallable<
      IUpdateAccountDetailsRequest,
      IUpdateAccountDetailsResponse
    >(
      this.functions,
      'updateAccountDetails'
    )(request);
  }

  async createPostDetails(request: ICreatePostRequest) {
    return await httpsCallable<
    ICreatePostRequest,
    ICreatePostResponse
    >(
      this.functions,
      'createPostDetails'
    )(request);
  }

  async addPostDetails(request: IAddPostRequest) {
    console.log("profiles.api.addPostsDetails ");
    console.log(JSON.stringify(request));
    return await httpsCallable<
    IAddPostRequest,
    IAddPostResponse
    >(
      this.functions,
      'addPost'
    )(request);
  }

  async updateContactDetails(request: IUpdateContactDetailsRequest) {
    return await httpsCallable<
      IUpdateContactDetailsRequest,
      IUpdateContactDetailsResponse
    >(
      this.functions,
      'updateContactDetails'
    )(request);
  }

  async updateAddressDetails(request: IUpdateAddressDetailsRequest) {
    return await httpsCallable<
      IUpdateAddressDetailsRequest,
      IUpdateAddressDetailsResponse
    >(
      this.functions,
      'updateAddressDetails'
    )(request);
  }

  async updatePersonalDetails(request: IUpdatePersonalDetailsRequest) {
    return await httpsCallable<
      IUpdatePersonalDetailsRequest,
      IUpdatePersonalDetailsResponse
    >(
      this.functions,
      'updatePersonalDetails'
    )(request);
  }

  async updateOccupationDetails(request: IUpdateOccupationDetailsRequest) {
    return await httpsCallable<
      IUpdateOccupationDetailsRequest,
      IUpdateOccupationDetailsResponse
    >(
      this.functions,
      'updateOccupationDetails'
    )(request);
  }
}
