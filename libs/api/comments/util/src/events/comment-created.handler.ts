import { IComment } from "../interfaces"; 

export class CommentCreatedEvent{ 
    constructor(public readonly: IComment) {}
}