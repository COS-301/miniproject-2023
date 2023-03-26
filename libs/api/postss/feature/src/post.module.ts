import { PostModule as PostDataAccessModule } from '@mp/api/postss/data-access';
import { Module } from '@nestjs/common';
import { AggregateRoot, CqrsModule } from '@nestjs/cqrs';
import { IPost, IPosts } from '@mp/api/postss/util';
// import {
// } from './commands';
// import {
// } from './events';
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
export class PostModule {
  
}
