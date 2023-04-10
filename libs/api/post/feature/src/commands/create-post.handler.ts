import{
  CreatePostCommand,
  IPost
} from "@mp/api/postss/util";
import {CommandHandler, EventPublisher, ICommandHandler} from '@nestjs/cqrs';
import {Timestamp} from "firebase/firestore";
import {Post} from "../models/post.model";

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand>{
  constructor(private publisher : EventPublisher) {}

  async execute(command: CreatePostCommand){
    console.log(`${CreatePostCommand.name}`);

    const request = command.request;
    const postID = request.post.postID;
    const content = request.post.content;
    const hashtag = request.post.hashtag;
    const caption = request.post.caption;
    const createdBy = request.post.createdBy;
    const ownedBy = request.post.ownedBy;
    const createdAt = request.post.createdAt;
    const buyerID = request.post.buyerID;
    const comments = request.post.comments;
    const likes = request.post.likes;
    const listing = request.post.listing;
    const ownerGainedTime = request.post.ownerGainedTime;
    const sold = request.post.sold;
    const totalTime = request.post.totalTime;

    const data: IPost = {
      postID,
      content,
      caption,
      hashtag,
      createdAt: Timestamp.fromDate(new Date()),
      createdBy,
      ownedBy,
      comments,
      likes,
      listing,
      ownerGainedTime,
      sold,
      totalTime,
      buyerID
    };

    const post = this.publisher.mergeObjectContext(Post.fromData(data));
    post.create();
    post.commit();
  }
}
