import { FriendsRepository } from '@mp/api/friends/data-access';
import { UsersRepository } from '@mp/api/users/data-access';
import {
  ICreateFriendResponse,
  CreateFriendRequestCommand,
  FriendRequestStatus,
  IFriendRequest,
} from '@mp/api/friends/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { FriendRequest } from '../models';
import { Timestamp } from 'firebase-admin/firestore';
import { IStatus } from '@mp/api/friend/util';

@CommandHandler(CreateFriendRequestCommand)
export class CreateFriendhandler implements ICommandHandler<CreateFriendRequestCommand, ICreateFriendResponse> {
  constructor(private readonly publisher: EventPublisher, private readonly UserRepository: UsersRepository) {}

  async execute(command: CreateFriendRequestCommand) {
    console.log(`${CreateFriendRequestCommand.name}`);

    const request = command.request;
    const userId1 = request.friendRequest.senderId;
    const receiverUsername = request.friendRequest.receiverUsername;

    let userId2 = '';
    const userId2doc = await this.UserRepository.getUserId(receiverUsername || ' ');

    if (userId2doc.docs.length == 0) throw 'no user in db';
    else userId2 = userId2doc.docs[0].id;

    const friendData: IFriendRequest = {
      senderId: userId1,
      receiverId: userId2,
      status: FriendRequestStatus.PENDING,
      lastUpdated: Timestamp.now(),
      created: Timestamp.now(),
    };

    const friend = this.publisher.mergeObjectContext(FriendRequest.fromData(friendData));

    friend.create();
    friend.commit();

    const status: IStatus = {
      value: 'pending',
    };

    const response: ICreateFriendResponse = { status };
    return response;
  }
}
