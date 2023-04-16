import { ProfilesService } from '@mp/api/profiles/feature';
import {
  FetchUserPostsRequest,
  ICheckRelationshipRequest,
  ICheckRelationshipResponse,
  IFetchUserPostsResponse,
  IUpdateAccountDetailsRequest,
  IUpdateAccountDetailsResponse,
  IUpdateRelationRequest,
  IUpdateRelationResponse,
} from '@mp/api/profiles/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const updateAccountDetails = functions.https.onCall(
  async (
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateAccountDetails(request);
  }
);

export const checkRelationship = functions.https.onCall(
  async (
    request: ICheckRelationshipRequest
  ): Promise<ICheckRelationshipResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.checkRelationship(request);
  }
);

export const fetchUserPosts = functions.https.onCall(
  async (
    request: FetchUserPostsRequest
  ): Promise<IFetchUserPostsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.fetchUserPosts(request);
  }
);

export const updateRelation = functions.https.onCall(
  async (
    request: IUpdateRelationRequest
  ): Promise<IUpdateRelationResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateRelation(request);
  }
);