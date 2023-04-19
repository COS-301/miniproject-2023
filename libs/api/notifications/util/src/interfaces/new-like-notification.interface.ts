import { NotificationType } from '../enums/notification-type.enum';

export interface INewLikeNotification {
    type: NotificationType.NewLike;
    from: string;
    to: string;
    postId: string;
    created?: Date | null | undefined;
}
