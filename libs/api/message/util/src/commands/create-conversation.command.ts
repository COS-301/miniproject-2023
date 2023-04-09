import { ICreateConversationRequest } from "../requests";

export class CreateConversationCommand {
  constructor(public readonly request  : ICreateConversationRequest) {};
}
