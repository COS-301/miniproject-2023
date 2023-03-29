import{
    MessageSentEvent,
    MessageDeletedEvent,
    DeleteMessageCommand,
    SendMessageCommand
}from '@mp/api/message/util';

import {Injectable} from "@nestjs/common";
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';



@Injectable()
export class MessageSagas {
  /*
    @Saga()
    onMessageDeleted = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
        ofType(MessageDeletedEvent),
        map(
        (event: MessageDeletedEvent) =>
            new DeleteMessageCommand({ user: event.user })
        )
    );
    };

    @Saga()
    onMessageSent = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
        ofType(MessageSentEvent),
        map(
        (event: MessageSentEvent) =>
            new SendMessageCommand({ user: event.user })
        )
    );
    };
    */
}
