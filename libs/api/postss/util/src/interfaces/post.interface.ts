import { Timestamp } from 'firebase-admin/firestore';
import { Hashtag } from '../enums';
import { IComment } from './comment.interface';

export interface IPost {
   postID: string;
   createdBy: string;
   likes: number; //fixed like left out
   ownedBy: string | null | undefined;
   buyerID?: string| null;
   comments?: IComment[] | null;
   createdAt?: Timestamp | null | undefined;
   content?: string | null | undefined;
   hashtag?: Hashtag | null |undefined;
   caption? : string | null | undefined;
   totalTime? : number | null | undefined;
   ownerGainedTime?: number | null | undefined;
   listing? : number | null | undefined
   sold?: boolean
}
