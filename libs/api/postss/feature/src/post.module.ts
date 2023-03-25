import { PostModule as PostDataAccessModule } from '@mp/api/postss/data-access';
import { Module } from '@nestjs/common';
import { AggregateRoot, CqrsModule } from '@nestjs/cqrs';
import { IPost, IPosts } from '../../util/src/interfaces';
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
export class PostModule extends AggregateRoot implements IPosts {
  constructor(public posts: IPost[] | null) {
    super();
  }

  

  toJSON():IPosts{
    return {
      posts: this.posts
    }
  }

}
