import {
    DeleteMessageCommand,
    IDeleteMessageResponse,
		IMessage,
		MessageDeletedEvent,
} from '@mp/api/message/util';

import {CommandHandler, EventBus, ICommandHandler} from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";


@CommandHandler(DeleteMessageCommand)
export class DeleteMessageHandler
  implements
    ICommandHandler<DeleteMessageCommand, IDeleteMessageResponse>
{
    constructor(
      @Inject(EventBus) private readonly eventBus : EventBus,
    ) {}

    async execute(command: DeleteMessageCommand): Promise<IDeleteMessageResponse> {
      const request = command.request.conversation;
      // TODO authentication
      /*
	 check requests authentication details
	 if they are unauthorized then reject
      */
      this.eventBus.publish(new MessageDeletedEvent(request));

      // TODO maybe we should return the next 10 like we would in the paging thing.
      const deletedMessage :IMessage = request.messages[request.messages.length-1];

      const response : IDeleteMessageResponse = {message:deletedMessage};
      return response;
    }
}
