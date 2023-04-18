import { IFriendRequest } from '@mp/api/friends/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FriendsRepository {
  async createFriendRequest(friendrequest: IFriendRequest) {
    return await admin.firestore().collection('friendRequests').doc().create(friendrequest);
  }
}
