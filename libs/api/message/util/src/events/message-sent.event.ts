import { IConversation } from "@mp/api/message/util";

export class MessageSentEvent {
    constructor(
      public readonly conversation : IConversation,
    ) {}
}
