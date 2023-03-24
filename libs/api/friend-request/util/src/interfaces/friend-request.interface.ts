import { Timestamp } from 'firebase-admin/firestore';
import { Status } from '../enums';

export interface IFriendRequest{ 

   id:string | null | undefined;
   to:string | null | undefined; 
   from : string | null | undefined;
   status : Status | null | undefined; 
   sent?: Timestamp | null | undefined;

}