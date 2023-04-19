//import { INotifications } from '@mp/api/notifications/util';

export class AddNotification {
  public readonly type = '[Notifications] AddNotification'
  //  constructor(public readonly notification: INotification | null) { }
}

export class DeleteNotification {
  static readonly type = '[Notifications] DeleteNotification'
}