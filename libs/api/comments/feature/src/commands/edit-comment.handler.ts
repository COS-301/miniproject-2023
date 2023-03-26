import { IComment,CommentEditedEvent, CreateCommentCommand } from "@mp/api/comments/util";
import { CommandHandler,ICommandHandler,EventPublisher } from "@nestjs/cqrs";
import { Comment } from "../../../../comments/feature/src/models";

@CommandHandler(CreateCommentCommand)
export class EditCommentHanlder implements ICommandHandler<CommentEditedEvent>{
    constructor(private publisher:EventPublisher){}

    //TODO implement
    async execute(command: CommentEditedEvent){
        return null;
    }
}