import {FilterList} from '@mp/api/feed/util';
import {PostList} from '@mp/api/feed/util';
import {Post} from '@mp/api/feed/util';
import { TimeModification } from '@mp/api/feed/util';
import { UserTime } from '@mp/api/feed/util';

export class SetFilterList {
  static readonly type = '[Feed] SetFilterList';
  constructor(public readonly filterList: FilterList | null) {
    console.log('constructor ', filterList);
  }
}

export class SetPostList {
  static readonly type = '[Feed] SetPostList';
  constructor(public readonly postList: PostList | null) {}
}

export class SetPost {
  static readonly type = '[Feed] SetPost';
  constructor(public readonly post: Post | null) {}
}

export class SetTimeModification {
  static readonly type = '[Feed] SetTimeModification';
  constructor(public readonly timeModification: TimeModification | null) {}
}

export class SetUserTime {
  static readonly type = '[Feed] SetUserTime';
  constructor(public readonly userTime: UserTime | null) {}
}
