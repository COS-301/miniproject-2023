import {
  IFriendRequest,
  FriendRequestStatus,
  FriendRequestCreatedEvent,
  UpdateAcceptFriendRequestEvent,
  UpdateRejectFriendRequestEvent,
  DeleteFriendRequestEvent,
} from '@mp/api/friend/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

export class FriendRequest extends AggregateRoot implements IFriendRequest {
  constructor(
    public senderId: string,
    public receiverId?: string,
    public status?: FriendRequestStatus | null | undefined,
    public lastUpdated?: Timestamp | null | undefined,
    public created?: Timestamp | null | undefined,
  ) {
    super();
  }

  static fromData(friendRequest: IFriendRequest): FriendRequest {
    const instance = new FriendRequest(
      friendRequest.senderId,
      friendRequest.receiverId,
      friendRequest.status,
      friendRequest.lastUpdated,
      friendRequest.created,
    );
    return instance;
  }

  create() {
    this.apply(new FriendRequestCreatedEvent(this.toJSON()));
  }

  delete() {
    this.apply(new DeleteFriendRequestEvent(this.toJSON()));
  }

  acceptFriendRequest() {
    this.apply(new UpdateAcceptFriendRequestEvent(this.toJSON()));
  }

  rejectFriendRequest() {
    this.apply(new UpdateRejectFriendRequestEvent(this.toJSON()));
  }

  toJSON(): IFriendRequest {
    return {
      senderId: this.senderId,
      receiverId: this.receiverId,
      status: this.status,
      lastUpdated: this.lastUpdated,
      created: this.created,
    };
  }
}
