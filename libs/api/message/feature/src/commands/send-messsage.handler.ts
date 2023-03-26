import {
    ISendMessageResponse,
    MessageSentEvent,
    SendMessageCommand
} from '@mp/api/message/util';

import {CommandHandler, EventBus, ICommandHandler} from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";


@CommandHandler(SendMessageCommand)
export class SendMessageHandler
  implements
    ICommandHandler<SendMessageCommand, ISendMessageResponse>
{
    constructor(
      @Inject(EventBus) private readonly eventBus : EventBus,
    ) {}

    async execute(command: SendMessageCommand): Promise<ISendMessageResponse> {
      const request = command.request.conversation;
      // TODO authentication
      /*
	 check requests authentication details
	 if they are unauthorized then reject
      */
      this.eventBus.publish(new MessageSentEvent(request));

      // TODO maybe we should return the next 10 like we would in the paging thing.
      const sentMessage = request.messages[request.messages.length-1];
      const response : ISendMessageResponse = {message:sentMessage};
      return response;
    }
}
