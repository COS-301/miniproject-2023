import { UsersRepository } from '@mp/api/users/data-access';
import {
  ICreateFriendResponse,
  CreateFriendRequestCommand,
  FriendRequestStatus,
  IFriendRequest,
  Status,
} from '@mp/api/friend/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { FriendRequest } from '../models';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(CreateFriendRequestCommand)
export class CreateFriendHandler implements ICommandHandler<CreateFriendRequestCommand, ICreateFriendResponse> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly userRepository: UsersRepository
  ) {}

  async execute(command: CreateFriendRequestCommand) {
    console.log(`${CreateFriendRequestCommand.name}`);

    const request = command.request;

    if (!request.friendRequest.senderId || !request.friendRequest.receiverUsername)
      throw new Error('Missing required fields');

    const userDoc = await this.userRepository.findUser(request.friendRequest.senderId);

    if (!userDoc.data())
      throw new Error('User not found')

    const receiverUserSnapshot = await this.userRepository.findUserWithUsername(request.friendRequest.receiverUsername);

    if (receiverUserSnapshot.empty)
      throw new Error('Receiver not found')

    const receiverUserDoc = receiverUserSnapshot.docs[0];

    const friendData: IFriendRequest = {
      senderId: request.friendRequest.senderId,
      receiverId: receiverUserDoc.id,
      status: FriendRequestStatus.PENDING,
      lastUpdated: Timestamp.now(),
      created: Timestamp.now(),
    };

    const friendRequest = this.publisher.mergeObjectContext(FriendRequest.fromData(friendData));

    friendRequest.create();
    friendRequest.commit();

    return { status: Status.SUCCESS };
  }
}
