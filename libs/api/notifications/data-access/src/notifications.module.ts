import { INotification } from '@mp/api/notifications/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class NotificationRespository {
    async createNotification(notification: INotification) {
        return await admin
        .firestore()
        .collection('notifications')
        .doc(notification.id)
        .create(notification);
    }
    
    async deleteNotification(notification: INotification) {
        return await admin
        .firestore()
        .collection('notifications')
        .doc(notification.id)
        .delete();
    }
    
    async getNotifications(userId: string) {
        return await admin
        .firestore()
        .collection('notifications')
        .where('userId', '==', userId)
        .get();
    }

}
