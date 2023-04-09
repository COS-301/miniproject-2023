import { IConversation } from "@mp/api/message/util";

export class MessageSentEvent {
    constructor(
      public readonly conversation : IConversation,
      public readonly ref : FirebaseFirestore.DocumentReference<IConversation>
    ) {}
}
