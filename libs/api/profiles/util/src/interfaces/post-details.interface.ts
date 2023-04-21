import { Timestamp } from 'firebase-admin/firestore';
import { Hashtag } from '../enums';
import { IComment } from './comment.interface'

export interface IPostDetails {
   postID?: string | null | undefined;
   createdBy?: string | null | undefined;
   likes?: number | null | undefined; //fixed like left out
   ownedBy?: string | undefined | null;
   buyerID?: string | null | undefined;
   comments?: IComment[] | null | undefined ;
   createdAt?: Timestamp | null | undefined;
   content?: string | null | undefined;
   hashtag?: Hashtag | null | undefined;
   caption? : string | null | undefined;
   totalTime? : number | null | undefined;
   ownerGainedTime?: number | null | undefined;
   listing? : number | null | undefined;
   sold?: boolean | null | undefined;
   uniqueID?: string | null | undefined;
}
