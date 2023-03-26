import {
    MessageSentEvent,
    MessageDeletedEvent,
    IMessage,
} from '@mp/api/message/util';

import {IUser} from '@mp/api/users/util';

import { IConversation } from '@mp/api/conversation/util';

import { AggregateRoot } from '@nestjs/cqrs';

export class Message extends AggregateRoot implements IConversation {
  constructor(
    public conversationID: string,
    public messages : IMessage[],
    public members? : IUser[] | null | undefined, // TODO remove undefined for authentication purpouses
  ) {
    super();
  }

  static fromData(message: IConversation): Message {
    const instance = new Message(
      message.conversationID,
      message.messages,
      message.members
    );
    return instance;
  }

  sendMessage() {
    this.apply(new MessageSentEvent(this.toJSON()));
  }

  deleteMessage() {
    this.apply(new MessageDeletedEvent(this.toJSON()));
  }

  toJSON(): IConversation {
    return {
      conversationID : this.conversationID,
      messages : this.messages,
      members : this.members,
    };
  }
}
