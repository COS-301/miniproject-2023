import {IUser} from '@mp/api/users/util';
import {IMessage} from '@mp/api/message/util';

export interface IConversation {
  conversationID: string;
  members? : IUser[] | null | undefined; // TODO remove optional for authentication purpouses
  messages : IMessage[];
}
