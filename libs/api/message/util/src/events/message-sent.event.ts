import { IConversation } from "@mp/api/conversation/util";

export class MessageSentEvent {
    constructor(public readonly conversation : IConversation) {}
}
