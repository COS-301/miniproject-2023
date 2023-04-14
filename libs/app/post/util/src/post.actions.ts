import {IPost} from '@mp/api/postss/util';

export class SetPost {
  static readonly type = '[Post] SetPost';
  constructor(public readonly post: IPost | null) {}
}

export class CreatePost {
  static readonly type = '[Post] CreatePost';
}