import { IConversation } from "../interfaces";

export class MessageSentEvent {
    constructor(
      public readonly conversation : IConversation,
    ) {}
}
