import { CommentModule as CommentDataAccessModule } from '@mp/api/comments/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
    CreateCommentHanlder,
} from './commands';
import {
    CommentCreatedHandler,
    
} from './events';
import { CommentsSagas } from './comments.sagas';
import { CommentService } from './comments.service';

export const CommandHandlers = [
  CreateCommentHanlder,
];
export const EventHandlers = [
  CommentCreatedHandler,
];

@Module({
  imports: [CqrsModule, CommentDataAccessModule],
  providers: [
    CommentService,
    ...CommandHandlers,
    ...EventHandlers,
    CommentsSagas,
  ],
  exports: [CommentService],
})
export class CommentsModule {}