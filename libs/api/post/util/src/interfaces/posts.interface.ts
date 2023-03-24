import { Timestamp } from 'firebase-admin/firestore';
import { IPost } from './post.interface';

export interface IPosts {
  posts?: IPost[] | null | undefined;
}
