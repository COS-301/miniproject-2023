import { Timestamp } from 'firebase-admin/firestore';

export interface IUser {
  id: string;
  email?: string | null | undefined;
  displayName?: string | null | undefined;
  photoURL?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  customClaims?: { [key: string]: any } | null | undefined;
  created?: Timestamp | null | undefined;

  //Additions
  time?: number | null | undefined;
  login?:Timestamp | null | undefined;
  memoryCount?:  number | null | undefined; 
  friendCount?: number | null | undefined; 
  friendList?: string[]| null | undefined;

}
