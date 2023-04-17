import {
  DeleteAccountCommand,
  GetPrivacySettingsCommand,
  IDeleteAccountRequest,
    IDeleteAccountResponse,
    IGetPrivacySettingsRequest,
    IGetPrivacySettingsResponse,
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    IUpdateAddressDetailsRequest,
    IUpdateAddressDetailsResponse,
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    IUpdateOccupationDetailsRequest,
    IUpdateOccupationDetailsResponse,
    IUpdatePasswordRequest,
    IUpdatePasswordResponse,
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse,
    IUpdatePrivacySettingsRequest,
    IUpdatePrivacySettingsResponse,
    UpdateAccountDetailsCommand,
    UpdateAddressDetailsCommand,
    UpdateContactDetailsCommand,
    UpdateOccupationDetailsCommand,
    UpdatePasswordCommand,
    UpdatePersonalDetailsCommand,
    UpdatePrivacySettingsCommand
} from '@mp/api/profiles/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class ProfilesService {
  constructor(private readonly commandBus: CommandBus) {}

  async updateAccountDetails(
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> {
    return await this.commandBus.execute<
      UpdateAccountDetailsCommand,
      IUpdateAccountDetailsResponse
    >(new UpdateAccountDetailsCommand(request));
  }

  async updateAddressDetails(
    request: IUpdateAddressDetailsRequest
  ): Promise<IUpdateAddressDetailsResponse> {
    return await this.commandBus.execute<
      UpdateAddressDetailsCommand,
      IUpdateAddressDetailsResponse
    >(new UpdateAddressDetailsCommand(request));
  }

  async updateContactDetails(
    request: IUpdateContactDetailsRequest
  ): Promise<IUpdateContactDetailsResponse> {
    return await this.commandBus.execute<
      UpdateContactDetailsCommand,
      IUpdateContactDetailsResponse
    >(new UpdateContactDetailsCommand(request));
  }

  async updatePersonalDetails(
    request: IUpdatePersonalDetailsRequest
  ): Promise<IUpdatePersonalDetailsResponse> {
    return await this.commandBus.execute<
      UpdatePersonalDetailsCommand,
      IUpdatePersonalDetailsResponse
    >(new UpdatePersonalDetailsCommand(request));
  }

  async updateOccupationDetails(
    request: IUpdateOccupationDetailsRequest
  ): Promise<IUpdateOccupationDetailsResponse> {
    return await this.commandBus.execute<
      UpdateOccupationDetailsCommand,
      IUpdateOccupationDetailsResponse
    >(new UpdateOccupationDetailsCommand(request));
  }





  // For the settings
  async deleteAccount(
    request: IDeleteAccountRequest
  ): Promise<IDeleteAccountResponse> {
    return await this.commandBus.execute<
      DeleteAccountCommand,
      IDeleteAccountResponse
    >(new DeleteAccountCommand(request));
  }

  async updatePassword(
    request: IUpdatePasswordRequest
  ): Promise<IUpdatePasswordResponse> {
    return await this.commandBus.execute<
      UpdatePasswordCommand,
      IUpdatePasswordResponse
    >(new UpdatePasswordCommand(request));
  }

  async getPrivacySettings(
    request: IGetPrivacySettingsRequest
  ): Promise<IGetPrivacySettingsResponse> {
    return await this.commandBus.execute<
      GetPrivacySettingsCommand,
      IGetPrivacySettingsResponse
    >(new GetPrivacySettingsCommand(request));
  }

  async UpdatePrivacySettings(
    request: IUpdatePrivacySettingsRequest
  ): Promise<IUpdatePrivacySettingsResponse> {
    return await this.commandBus.execute<
      UpdatePrivacySettingsCommand,
      IUpdatePrivacySettingsResponse
    >(new UpdatePrivacySettingsCommand(request));
  }

}
