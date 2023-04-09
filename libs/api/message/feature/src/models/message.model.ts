import {
    MessageSentEvent,
    MessageDeletedEvent,
    IMessage,
} from '@mp/api/message/util';

import {MessageRepository} from "@mp/api/message/data-access";
import {IUser} from '@mp/api/users/util';

import { IConversation } from '@mp/api/message/util';

import { AggregateRoot } from '@nestjs/cqrs';
import { Inject } from "@nestjs/common";

export class Message extends AggregateRoot implements IConversation {
  @Inject(MessageRepository) private readonly repository : MessageRepository = new MessageRepository();
  constructor(
    public conversationID? : string | null | undefined,
    public messages? : IMessage[] | null | undefined, //just to avoid build errors
    public members? : IUser[] | null | undefined, // TODO remove undefined for authentication purpouses
  ) {
    super();
  }

  static fromData(message: IConversation): Message {
    const instance = new Message(
      message.conversationID,
      message.messages,
      message.members,
    );
    return instance;
  }

  async sendMessage() {
    const doc = await this.repository.getMessageID();
    this.messages!.at(0)!.id = doc.id;
    if (this?.messages?.at(0)?.id) {
      this.messages.at(0)!.content.textData = "fuck";
    }
    this.apply(new MessageSentEvent(this.toJSON(), doc));
  }

  deleteMessage() {
    this.apply(new MessageDeletedEvent(this.toJSON()));
  }

  toJSON(): IConversation {
    const conversation: IConversation = {
      conversationID : this.conversationID,
    }
    this.messages ? conversation.messages = this.messages : undefined;
    this.members ? conversation.members = this.members : undefined;
    return conversation;
  }
}
