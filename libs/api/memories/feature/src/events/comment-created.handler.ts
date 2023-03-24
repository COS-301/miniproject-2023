import { CommentCreatedEvent } from "@mp/api/memories/util"; 
import { IEventHandler,EventsHandler } from "@nestjs/cqrs"; 
import { MemoryRepository } from "@mp/api/memories/data-access";

@EventsHandler(CommentCreatedEvent) 
export class CommentCreatedHandler implements IEventHandler<CommentCreatedEvent>{
    constructor(private readonly repository: MemoryRepository){};

    //TODO implement
    async handle(event: CommentCreatedEvent) {
     return null;
    }
}