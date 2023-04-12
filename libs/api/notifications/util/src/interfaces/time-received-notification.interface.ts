import { Timestamp } from 'firebase-admin/firestore';

export interface ITimeReceivedDetails {
    userId : string;
    displayName?: string | null | undefined;
    photoURL?: string | null | undefined;
    created?: Timestamp | null | undefined;
}
