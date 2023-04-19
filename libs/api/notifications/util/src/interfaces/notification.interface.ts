import { Timestamp } from 'firebase-admin/firestore';
import { NotificationType } from '../enums';
import { INewFollowerNotification } from './new-follower-notification.interface';
import { INewLikeNotification } from './new-like-notification.interface';

export interface INotification {
    type: NotificationType;
    notification: INewLikeNotification | INewFollowerNotification;
    created?: Timestamp | null | undefined;
}
