// write service functions here
import { SendNotificationRequest, SendNotificationCommand, SendNotificationEvent } from '@mp/api/notifications/util';
import { GetNotificationsRequest, GetNotificationsQuery, GetNotificationResponse, GetNotificationsEvent  } from '@mp/api/notifications/util';
import { Injectable } from '@angular/core';
import { QueryBus, CommandBus, EventBus } from '@nestjs/cqrs';

@Injectable()
export class NotificationService {
  // constructor(private readonly QueryBus: queryBus) {}

}
