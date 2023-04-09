import { IConversation } from "../interfaces";

export class ConversationCreatedEvent {
    constructor(
      public readonly conversation : IConversation,
      public readonly ref : FirebaseFirestore.DocumentReference<IConversation>
    ) {}
}
