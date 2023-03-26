import { 
    ICreateCommentRequest,
    IEditCommentRequest,
    CommentCreatedEvent,
    CommentEditedEvent,
    CreateCommentCommand,
    EditCommentCommand,
    ICreateCommentResponse,
    IEditCommentResponse
} from '@mp/api/comments/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class CommentsService {
constructor(private readonly commandBus: CommandBus) {}

async createComment(
request: ICreateCommentRequest
): Promise<ICreateCommentResponse> {
return await this.commandBus.execute<
  CreateCommentCommand,
  ICreateCommentResponse
>(new CommentCreatedEvent(request.comment));
}

async editComment(
    request: IEditCommentRequest
    ): Promise<IEditCommentResponse> {
    return await this.commandBus.execute<
      EditCommentCommand,
      IEditCommentResponse
    >(new CommentEditedEvent(request.comment));
    }

}
