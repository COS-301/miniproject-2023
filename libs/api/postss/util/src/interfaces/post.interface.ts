import { Timestamp } from 'firebase-admin/firestore';
import { Hashtag } from '../enums';
import { IComment } from './comment.interface';

export interface IPost {
   postID: string;
   createdBy?: string;
   likes?: number; //fixed like left out
   ownedBy: string | undefined | null;
   buyerID?: string;
   comments?: IComment[] ;
   createdAt?: Timestamp ;
   content?: string ;
   hashtag?: Hashtag ;
   caption? : string ;
   totalTime? : number ;
   ownerGainedTime?: number ;
   listing? : number ;
   sold?: boolean;
}
