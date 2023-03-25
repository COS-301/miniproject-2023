import { Timestamp } from 'firebase-admin/firestore';
import { Hashtag } from '../enums';

export interface IPost {
  postID: string;
  createdBy: string;
  ownedBy: string | null | undefined;
  likes: number; //fixed like left out
  createdAt?: Timestamp | null | undefined;
  content?: string | null | undefined;
  hashtag?: Hashtag | null |undefined;
  caption? : string | null | undefined;
  totalTime? : number | null | undefined
  ownerGainedTime?: number | null | undefined
  listing? : number | null | undefined
}
