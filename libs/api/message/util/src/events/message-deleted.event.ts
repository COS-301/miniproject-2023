import { IConversation } from "@mp/api/conversation/util";

export class MessageDeletedEvent {
    constructor(public readonly conversation : IConversation) {}
}
