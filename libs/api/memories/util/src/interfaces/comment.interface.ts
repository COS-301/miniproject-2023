import { Timestamp } from 'firebase-admin/firestore';

export interface IComment {
  userId: string | null | undefined;
  displayName: string | null | undefined;
  imgUrl: string | null | undefined;
  text: string | null | undefined;
  created: Timestamp | null | undefined;
}
