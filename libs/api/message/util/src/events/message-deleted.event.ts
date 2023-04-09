import { IConversation } from "../interfaces";

export class MessageDeletedEvent {
    constructor(public readonly conversation : IConversation) {}
}
