import { MessageModule as MessageDataAccessModule } from '@mp/api/message/data-access';
import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import {
  SendMessageHandler,
  DeleteMessageHandler,
} from './commands';

import {
  MessageDeletedHandler,
  MessageSentHandler
} from './events';

import {MessageSagas} from './message.sagas';
import {MessageService} from './message.service';

export const CommandHandlers = [
  SendMessageHandler,
  DeleteMessageHandler
]

export const EventHandlers = [
  MessageSentHandler,
  MessageDeletedHandler,
]

@Module({
  imports: [CqrsModule, MessageDataAccessModule],
  providers : [
    MessageService,
    ...CommandHandlers,
    ...EventHandlers,
    MessageSagas
  ],
  exports: [MessageService],
})
export class MessageModule {}
