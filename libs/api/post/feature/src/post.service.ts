// import {
//     // IUpdateAccountDetailsRequest,
//     // IUpdateAccountDetailsResponse,
//     // IUpdateAddressDetailsRequest,
//     // IUpdateAddressDetailsResponse,
//     // IUpdateContactDetailsRequest,
//     // IUpdateContactDetailsResponse,
//     // IUpdateOccupationDetailsRequest,
//     // IUpdateOccupationDetailsResponse,
//     // IUpdatePersonalDetailsRequest,
//     // IUpdatePersonalDetailsResponse,
//     // UpdateAccountDetailsCommand,
//     // UpdateAddressDetailsCommand,
//     // UpdateContactDetailsCommand,
//     // UpdateOccupationDetailsCommand,
//     // UpdatePersonalDetailsCommand
// } from '@mp/api/post/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class PostService {
  constructor(private readonly commandBus: CommandBus) {}

  /*
  Example
  async updateAccountDetails(
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> {
    return await this.commandBus.execute<
      UpdateAccountDetailsCommand,
      IUpdateAccountDetailsResponse
    >(new UpdateAccountDetailsCommand(request));
  }
  */

  
}
