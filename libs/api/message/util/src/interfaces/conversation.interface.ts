import {IUser} from '@mp/api/users/util';
import {IMessage} from './message.interface';

export interface IConversation {
  conversationID?: string | null | undefined;
  members? : IUser[]| null | undefined; // TODO remove optional for authentication purpouses
  messages? : IMessage[] | null | undefined;
}
