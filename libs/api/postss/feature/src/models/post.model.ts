import {
ICreatePostRequest,
IComment,
ICreatePostResponse,
IGetPostRequest,
IGetPostResponse,
IGetTrendoingPostRequest,
ILikePostRequest,
ILikePostResponse,
IPost,
IPosts,
CreatePostCommand,
PostGetEvent,
PostTrendingGetQuery,
PostCreatedEvent,
ProfileLikedEvent,
Hashtag,
} from '@mp/api/postss/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

export class Post extends AggregateRoot implements IPost {
constructor(
  public postID: string,
  public createdBy: string,
  public ownedBy: string | null | undefined,
  public likes: number,//fixed like left out
  public comments?: IComment[] | null,
  public createdAt?: Timestamp | null | undefined,
  public content?: string | null | undefined,
  public hashtag?: Hashtag | null |undefined,
  public caption? : string | null | undefined,
  public totalTime? : number | null | undefined,
  public ownerGainedTime?: number | null | undefined,
  public listing? : number | null | undefined
) {
  super();
}

static fromData(profile: IPost): Post {
  const instance = new Post(
    profile.postID,
    profile.createdBy,
    profile.ownedBy,
    profile.likes,
    profile.comments,
    profile.createdAt,
    profile.content,
    profile.hashtag,
    profile.caption,
    profile.totalTime,
    profile.ownerGainedTime,
    profile.listing
  );
  return instance;
}

create() {
  this.apply(new PostCreatedEvent(this.toJSON()));
}

toJSON(): IPost {
  return {
    postID : this.postID,
    createdBy : this.createdBy,
    ownedBy : this.ownedBy,
    likes : this.likes,
    comments : this.comments,
    createdAt : this.createdAt,
    content : this.content,
    hashtag : this.hashtag,
    caption : this.caption,
    totalTime : this.totalTime,
    ownerGainedTime : this.ownerGainedTime,
    listing : this.listing
  };
}
}
