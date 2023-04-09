import { IConversation } from "@mp/api/message/util";

export class ConversationCreatedEvent {
    constructor(
      public readonly conversation : IConversation,
      public readonly ref : FirebaseFirestore.DocumentReference<IConversation>
    ) {}
}
