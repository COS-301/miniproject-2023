import { IFriendRequest,FriendRequestStatus, FriendRequestCreatedEvent } from '@mp/api/friend/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

export class FriendRequest extends AggregateRoot implements IFriendRequest {
  constructor(
    public senderId: string,
    public receiverId: string ,
    public status: FriendRequestStatus,
    public lastUpdated?: Timestamp,
    public created?:Timestamp,
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
    this.apply(new FriendRequestCreatedEvent
        (this.toJSON()));
  }

  toJSON(): IFriendRequest {
    return {
      senderId:this.senderId,  
      receiverId:this.receiverId,
      status:this.status,
      lastUpdated:this.lastUpdated,
      created: this.created,
    };
  }
}