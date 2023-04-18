import { ICreateFriendRequest, ICreateFriendResponse, CreateFriendRequestCommand } from '@mp/api/friends/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class FriendsService {
  constructor(private readonly commandBus: CommandBus) {}

  async createFriend(request: ICreateFriendRequest): Promise<ICreateFriendResponse> {
    return await this.commandBus.execute<CreateFriendRequestCommand, ICreateFriendResponse>(
      new CreateFriendRequestCommand(request),
    );
  }
}
