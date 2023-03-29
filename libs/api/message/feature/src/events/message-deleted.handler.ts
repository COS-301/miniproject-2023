import {MessageRepository} from "@mp/api/message/data-access";
import {MessageDeletedEvent} from "@mp/api/message/util";
import {EventsHandler, IEventHandler} from "@nestjs/cqrs";

@EventsHandler(MessageDeletedEvent)
export class MessageDeletedHandler
  implements IEventHandler<MessageDeletedEvent>
  {
    constructor(private readonly repository : MessageRepository) {}

    async handle(event: MessageDeletedEvent) {
    	console.log(`$MessageDeletedHandler.name`)
	this.repository.deleteMessage(/*event.IMessage*/)
    }
  }
