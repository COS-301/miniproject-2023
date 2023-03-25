import { IPost, IPosts } from '@mp/api/postss/util';


export class SubscribeToPost {
  static readonly type = '[Post] SubscribeToPost';
}

export class SetPosts {
  static readonly type = '[Posts] SetPosts';
  constructor(public readonly posts: IPosts | null) {}
}

export class SetPost {
  static readonly type = '[Post] Set Post';
  constructor(public post: IPost) { }
}

export class GetPostByUserId {
  static readonly type = '[Post] Get Post By User Id';
  constructor(public userId: string) {}
}

export class PostTrendingGet {
  static readonly type = '[Posts] Post Trending Get';
}
/*
Example
export class UpdateAccountDetails {
  static readonly type = '[Profile] UpdateAccountDetails';
}
*/
