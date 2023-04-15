import { StateContext } from '@ngxs/store';
import { Post } from '@mp/api/feed/util';

export class CreatePost {
  static readonly type = '[Post] Create Post';
  constructor(public readonly post: Post, public readonly file: File) {}
}

export class CreatePostSuccess {
  static readonly type = '[Post] Create Post Success';
  constructor(public readonly postId: number) {}
}

export class CreatePostFailure {
  static readonly type = '[Post] Create Post Failure';
  constructor(public readonly error: string) {}
}
