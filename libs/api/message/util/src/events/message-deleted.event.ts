import { IConversation } from "@mp/api/message/util";

export class MessageDeletedEvent {
    constructor(public readonly conversation : IConversation) {}
}
