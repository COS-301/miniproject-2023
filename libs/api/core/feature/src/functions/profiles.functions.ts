import { ProfilesService } from '@mp/api/profiles/feature';
import {
  IDeleteAccountRequest,
  IDeleteAccountResponse,
  IGetPrivacySettingsRequest,
  IGetPrivacySettingsResponse,
  IUpdateAccountDetailsRequest,
  IUpdateAccountDetailsResponse,
  IUpdatePasswordRequest,
  IUpdatePasswordResponse,
  IUpdatePrivacySettingsRequest,
  IUpdatePrivacySettingsResponse,
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