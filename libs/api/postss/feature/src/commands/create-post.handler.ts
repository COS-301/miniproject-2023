import {
  CreatePostCommand,
  IPost,
} from '@mp/api/postss/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Post } from '../models';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler
implements ICommandHandler<CreatePostCommand>
{
constructor(private publisher: EventPublisher) {}

async execute(command: CreatePostCommand) {
  console.log(`${CreatePostHandler.name}`);

  const request = command.request;
  const postID = request.post.postID;
  const createdBy = request.post.createdBy;
  const ownedBy = request.post.ownedBy;
  const content = request.post.content;
  const caption = request.post.caption;
  const hashtag = request.post.hashtag;
  const createdAt = request.post.createdAt;
  const likes = request.post.likes;

  const data: IPost = {
    postID,
    createdBy,
    likes,
    ownedBy,
    content,
    caption,
    hashtag,
    createdAt: Timestamp.fromDate(new Date()),
  };
  const post = this.publisher.mergeObjectContext(Post.fromData(data));

  post.create();
  post.commit();
}
}
