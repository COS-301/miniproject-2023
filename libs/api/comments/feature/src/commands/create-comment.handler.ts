import { IComment,CommentCreatedEvent, CreateCommentCommand } from "@mp/api/comments/util";
import { CommandHandler,ICommandHandler,EventPublisher } from "@nestjs/cqrs";
import { Comment } from "../../../../comments/feature/src/models";

@CommandHandler(CreateCommentCommand)
export class CreateCommentHanlder implements ICommandHandler<CommentCreatedEvent>{
    constructor(private publisher:EventPublisher){}

    //TODO implement
    async execute(command: CommentCreatedEvent){
        return null;
    }
}