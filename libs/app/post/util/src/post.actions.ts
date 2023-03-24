import { IPost, IPosts } from '@mp/api/post/util';


export class SubscribeToPost {
  static readonly type = '[Post] SubscribeToPost';
}

export class SetPosts {
  static readonly type = '[Posts] SetPosts';
  constructor(public readonly posts: IPosts | null) {}
}

export class SetPost {
  static readonly type = '[Post] SetPost';
  constructor(public readonly post: IPost | null) {}
}


/*
Example
export class UpdateAccountDetails {
  static readonly type = '[Profile] UpdateAccountDetails';
}
*/
