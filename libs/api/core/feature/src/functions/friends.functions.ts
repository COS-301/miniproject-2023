import { FriendsService } from '@mp/api/friends/feature';
import { ICreateFriendRequest, ICreateFriendResponse } from '@mp/api/friends/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const createFriendRequest = functions.https.onCall(
  async (request: ICreateFriendRequest): Promise<ICreateFriendResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(FriendsService);
    return service.createFriend(request);
  },
);
