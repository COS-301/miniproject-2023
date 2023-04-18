import { Timestamp } from 'firebase-admin/firestore';
import { FriendRequestStatus } from '../enums';

export interface IFriendRequest {
  senderId: string;
  receiverId?: string | null | undefined;
  receiverUsername?: string;
  status?: FriendRequestStatus | null | undefined;
  lastUpdated?: Timestamp | null | undefined;
  created?: Timestamp | null | undefined;
}

export interface IStatus {
  value: string | null | undefined;
}
