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


/*
Example
export class UpdateAccountDetails {
  static readonly type = '[Profile] UpdateAccountDetails';
}
*/
