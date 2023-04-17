import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store'

export interface NotificationsStateModel {
    notification: null;
    memberId: null;
    notificationId: null;
}

@State<NotificationsStateModel>({
    name: 'notifications',
    defaults: {
        notification: null,
        memberId: null,
        notificationId: null
    },
})
@Injectable()
export class NotificationsState {
    constructor(
        // private readonly notificationsApi: NotificationsApi,
        private readonly store: Store
    ) { }

    @Selector()
    static notification(state: NotificationsStateModel) {
        return state.notification;
    }
}
