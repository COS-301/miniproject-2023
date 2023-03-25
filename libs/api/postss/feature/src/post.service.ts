import {
    // IUpdateAccountDetailsRequest,
    // IUpdateAccountDetailsResponse,
    // IUpdateAddressDetailsRequest,
    // IUpdateAddressDetailsResponse,
    // IUpdateContactDetailsRequest,
    // IUpdateContactDetailsResponse,
    // IUpdateOccupationDetailsRequest,
    // IUpdateOccupationDetailsResponse,
    // IUpdatePersonalDetailsRequest,
    // IUpdatePersonalDetailsResponse,
    // UpdateAccountDetailsCommand,
    // UpdateAddressDetailsCommand,
    // UpdateContactDetailsCommand,
    // UpdateOccupationDetailsCommand,
    // UpdatePersonalDetailsCommand
ICreatePostRequest,
ICreatePostResponse,
IGetPostRequest,
IGetPostResponse,
IGetTrendoingPostRequest,
ILikePostRequest,
ILikePostResponse,
GetPostCommand,
LikePostCommand,
CreatePostCommand
} from '@mp/api/postss/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class PostService {
  constructor(private readonly commandBus: CommandBus) {}

  async createPost(
    request: ICreatePostRequest
  ): Promise<ICreatePostRequest> {
    return await this.commandBus.execute<
      CreatePostCommand,
      ICreatePostRequest
    >(new CreatePostCommand(request));
  }
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
