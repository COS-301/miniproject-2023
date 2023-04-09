import {
    MessageSentEvent,
    MessageDeletedEvent,
    IMessage,
} from '@mp/api/message/util';
import {IUser} from '@mp/api/users/util';
import { IConversation } from '@mp/api/message/util';
import { AggregateRoot } from '@nestjs/cqrs';
import {randomInt} from 'crypto';

export class Message extends AggregateRoot implements IConversation {
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
    this.messages!.at(0)!.id = (this.messages!.at(0)!.metaData.timePosted.seconds + randomInt(10000)).toString();
    if (this?.messages?.at(0)?.id) {
      this.messages.at(0)!.content.textData = "fuck";
    }
    this.apply(new MessageSentEvent(this.toJSON()));
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
