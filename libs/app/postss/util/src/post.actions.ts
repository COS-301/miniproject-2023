import { Hashtag, IPost, IPosts } from '@mp/api/postss/util';
//import { ActionType } from '@ngxs/store';


export class SubscribeToPost {
  static readonly type = '[Post] SubscribeToPost';
}
export class SubscribeToPosts {
  static readonly type = '[Posts] SubscribeToPosts';
}
export class SetPosts {
  static readonly type = '[Posts] SetPosts';
  constructor(public readonly posts: IPosts) {}
}

export class SetPost {
  static readonly type = '[Post] SetPost';
  constructor(public readonly post: IPost | null | undefined ) {}
}

export class GetPostByUserId {
  static readonly type = '[Post] Get Post By User Id';
  constructor(public userId: string) {}
}

export class PostTrendingGet {
  static readonly type = '[Posts] Post Trending Get';
}

export class GetPostByHashtag {
  static readonly type = '[Posts] Get Post By Hashtag';
  constructor(public hashtag: Hashtag) { }
}

export class CreatePost {
  static readonly type = '[Post] CreatePost';
}

export class LikePost {
  static readonly type = '[Post] LikePost';
  constructor(public postID: string) {}
}

export class CommentOnPost {
  static readonly type = '[Post] CommentOnPost';
  constructor(public postId: string, public comment: string) {}
}

export class BuyPost {
  static readonly type = '[Post] BuyPost';
  constructor(public postId: string, public amount: number, public buyerID: string) {}
}
/*
Example
export class UpdateAccountDetails {
  static readonly type = '[Profile] UpdateAccountDetails';
}
*/
