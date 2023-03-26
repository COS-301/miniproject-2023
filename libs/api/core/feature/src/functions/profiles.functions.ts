import { ProfilesService } from '@mp/api/profiles/feature';
import {
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,  
    IUpdateAccountVisibilityRequest, 
    IUpdateAccountVisibilityResponse, 
    // IUpdateAddressDetailsRequest, //
    // IUpdateAddressDetailsResponse, //
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    // IUpdateOccupationDetailsRequest, //
    // IUpdateOccupationDetailsResponse, //
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse
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

// may not be needed
// export const updateAddressDetails = functions.https.onCall(
//   async (
//     request: IUpdateAddressDetailsRequest
//   ): Promise<IUpdateAddressDetailsResponse> => {
//     const app = await NestFactory.createApplicationContext(CoreModule);
//     const service = app.get(ProfilesService);
//     return service.updateAddressDetails(request);
//   }
// );

export const updateContactDetails = functions.https.onCall(
  async (
    request: IUpdateContactDetailsRequest
  ): Promise<IUpdateContactDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateContactDetails(request);
  }
);

export const updatePersonalDetails = functions.https.onCall(
  async (
    request: IUpdatePersonalDetailsRequest
  ): Promise<IUpdatePersonalDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updatePersonalDetails(request);
  }
);


export const updateAccountVisibility =  functions.https.onCall(
  async (
    request:IUpdateAccountVisibilityRequest
  ): Promise<IUpdateAccountVisibilityResponse> => {
    // Update Account visibility code to be done here
    //...
  }
); 


// may not be needed
// export const updateOccupationDetails = functions.https.onCall(
//   async (
//     request: IUpdateOccupationDetailsRequest
//   ): Promise<IUpdateOccupationDetailsResponse> => {
//     const app = await NestFactory.createApplicationContext(CoreModule);
//     const service = app.get(ProfilesService);
//     return service.updateOccupationDetails(request);
//   }
// );
