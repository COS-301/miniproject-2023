import { ProfilesService } from '@mp/api/profiles/feature';
import {

  IDeleteAccountRequest,
  IDeleteAccountResponse,
  IGetPrivacySettingsRequest,
  IGetPrivacySettingsResponse,
  IUpdatePasswordRequest,
  IUpdatePasswordResponse,
  IUpdatePrivacySettingsRequest,
  IUpdatePrivacySettingsResponse,

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



export const deleteAccount = functions.https.onCall(
  async (
    request: IDeleteAccountRequest
  ): Promise<IDeleteAccountResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.deleteAccount(request);
  }
);

export const getPrivacySettings = functions.https.onCall(
  async (
    request: IGetPrivacySettingsRequest
  ): Promise<IGetPrivacySettingsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.getPrivacySettings(request);
  }
);

export const updatePrivacySettings = functions.https.onCall(
  async (
    request: IUpdatePrivacySettingsRequest
  ): Promise<IUpdatePrivacySettingsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.UpdatePrivacySettings(request);
  }
);

export const updatePassword = functions.https.onCall(
  async (
    request: IUpdatePasswordRequest
  ): Promise<IUpdatePasswordResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updatePassword(request);
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