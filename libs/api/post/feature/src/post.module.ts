import { PostModule as PostDataAccessModule } from '@mp/api/post/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
} from './commands';
import {
} from './events';
import { PostSagas } from './post.sagas';
import { PostService } from './post.service';
export const CommandHandlers = [
];
export const EventHandlers = [
  
];

@Module({
  imports: [CqrsModule, PostDataAccessModule],
  providers: [
    PostService,
    ...CommandHandlers,
    ...EventHandlers,
    PostSagas,
  ],
  exports: [PostService],
})
export class PostModule {}
