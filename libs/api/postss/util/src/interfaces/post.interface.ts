import { Timestamp } from 'firebase-admin/firestore';
import { Hashtag } from '../enums';

export interface IPost {
  postID: string;
  createdBy: string;
  ownedBy: string | null | undefined;
  createdAt?: Timestamp | null | undefined;
  content?: String | null | undefined;
  hashtag?: Hashtag | null |undefined;
  caption? : String | null | undefined;
  totalTime? : number | null | undefined
  ownerGainedTime?: number | null | undefined
  listing? : number | null | undefined
}
