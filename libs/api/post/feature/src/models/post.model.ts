import { Timestamp } from 'firebase-admin/firestore';
import { AggregateRoot } from '@nestjs/cqrs';
import {Hashtag, IComment, IPost, PostCreatedEvent} from '@mp/api/postss/util';
import {PostRepository} from "@mp/api/postss/data-access";
// import { currency } from "@mp/api/post/util";
import { LikeUpdatedEvent , TotaltimeUpdateEvent} from "@mp/api/postss/util";


export class Post extends AggregateRoot implements IPost {
    constructor(
        public postID: string,
        public createdBy: string,
        public likes: number, //fixed like left out
        public ownedBy: string | null | undefined,
        public buyerID?: string| null,
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

    // create() {
    //   this.apply(new LikesUpdatedEvent(this.toJSON()));
    // }

    static fromData(post: IPost): Post {
        const instance = new Post(
            post.postID,
            post.createdBy,
            post.likes,
            post.buyerID,
            post.ownedBy,
            post.comments,
            post.createdAt,
            post.content,
            post.hashtag,
            post.caption,
            post.totalTime,
            post.ownerGainedTime,
            post.listing,
        );
        return instance;
      }

      create(){
        this.apply(new PostCreatedEvent(this.toJSON()));
      }

      UpdateLikedCount() {
        this.likes = this.likes + 1;
        this.UpdateTotalTime();
        this.apply(new LikeUpdatedEvent(this.toJSON()));
      }

      UpdateTotalTime()
      {
        if(this.totalTime != null)
        {
          // this.totalTime = this.totalTime + currency.TIMEPERLIKE;
          this.totalTime = this.totalTime + 5;

        }
        else
          this.totalTime = 1;
        this.apply(new TotaltimeUpdateEvent(this.toJSON()));
      }

      toJSON(): IPost {
        return {
          postID: this.postID,
          createdBy: this.createdBy,
          likes: this.likes,
          ownedBy: this.ownedBy,
          createdAt: this.createdAt,
          content: this.content,
          hashtag: this.hashtag,
          caption: this.caption,
          totalTime: this.totalTime,
          ownerGainedTime: this.ownerGainedTime,
          listing: this.listing,
        };
      }

      //  updatelikes(post: IPost) {

      //   this.likes = post.likse + 1;
      //   this.apply(new LikesUpdatedEvent(this.toJSON()))
      // }
}
