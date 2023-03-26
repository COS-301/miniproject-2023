import {IDeleteMessageRequest} from "../requests";

export class DeleteMessageCommand {
    constructor(public readonly request : IDeleteMessageRequest) {}
}
