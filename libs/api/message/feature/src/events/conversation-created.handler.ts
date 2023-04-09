import {ConversationCreatedEvent} from "@mp/api/message/util";
import {EventsHandler, IEventHandler} from "@nestjs/cqrs";

@EventsHandler(ConversationCreatedEvent)
export class ConversationCreatedHandler
  implements IEventHandler<ConversationCreatedEvent>
  {
    constructor() {};
    async handle(event: ConversationCreatedEvent) {
      event.ref.set(event.conversation);
    }
  }
