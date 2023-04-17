import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { FetchPostsRequest, FetchPostsResponse } from '@mp/api/feed/util';
import {
    IProfile,
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    IUpdateAddressDetailsRequest,
    IUpdateAddressDetailsResponse,
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    IUpdateOccupationDetailsRequest,
    IUpdateOccupationDetailsResponse,
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse
} from '@mp/api/profiles/util';

//for friends api call
import { GetFriendsRequest, GetFriendsResponse } from '@mp/api/friends/util';
import { RemoveFriendRequest, RemoveFriendResponse } from '@mp/api/friends/util';

@Injectable()
export class ProfilesApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

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

  async updateAccountDetails(request: IUpdateAccountDetailsRequest) {
    return await httpsCallable<
      IUpdateAccountDetailsRequest,
      IUpdateAccountDetailsResponse
    >(
      this.functions,
      'updateAccountDetails'
    )(request);
  }

  async fetchPosts(request: FetchPostsRequest) {
    return await httpsCallable<
      FetchPostsRequest,
      FetchPostsResponse
    >(
      this.functions, 
      'fetchPosts'
    )(request);
  }

  async getFriends(request: GetFriendsRequest) {
    return await httpsCallable<
      GetFriendsRequest,
      GetFriendsResponse
    >(
      this.functions,
      'getFriends'
    )(request);
  }

  async removeFriend(request: RemoveFriendRequest) {
    return await httpsCallable<
      RemoveFriendRequest,
      RemoveFriendResponse
    >(
      this.functions,
      'removeFriend'
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
