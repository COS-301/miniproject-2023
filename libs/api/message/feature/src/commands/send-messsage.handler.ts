import {
    ISendMessageResponse,
    SendMessageCommand,
} from '@mp/api/message/util';

import {CommandHandler, EventPublisher, ICommandHandler} from "@nestjs/cqrs";
import { Message } from '../models';

@CommandHandler(SendMessageCommand)
export class SendMessageHandler implements ICommandHandler<SendMessageCommand, ISendMessageResponse>{

  constructor(
    private readonly eventBus : EventPublisher,
  ) {}

  async execute(command: SendMessageCommand) : Promise<ISendMessageResponse> {
    const request = command.request.conversation;

    // TODO authentication
    /*
    check requests authentication details
    if they are unauthorized then reject
    */
    if (!request.conversationID) {
      throw new Error("Conversation ID missing in Request Body");
    }
    if (!request.messages) {
      throw new Error("Message Missing in request body");
    }
    if (request.messages.length == 0) {
      throw new Error("Message propertie must contain a message");
    }
    const message = this.eventBus.mergeObjectContext(
      Message.fromData(request)
    );
    await message.sendMessage();
    message.commit();
    // We have two options here, we either just return what we were given, or we return the conversation object storing the messages.
    // TODO maybe we should return the next 10 like we would in the paging thing.
    const response : ISendMessageResponse = {message:message.messages!.at(0)!};
    return response;
  }
}
