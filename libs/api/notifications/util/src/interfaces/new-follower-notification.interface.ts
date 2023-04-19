import { Timestamp } from 'firebase-admin/firestore';

export interface INewFollowerNotification {
    newFollowerId : string;
    created?: Timestamp | null | undefined; 
}
