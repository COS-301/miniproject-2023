import {FilterList, FilterType} from '@mp/api/feed/util';
import {PostList} from '@mp/api/feed/util';
import {Post} from '@mp/api/feed/util';
import { TimeModification } from '@mp/api/feed/util';
import { UserTime } from '@mp/api/feed/util';

export class SetFilterList {
  static readonly type = '[Feed] Set Filter List';
  constructor(public payload: { list: FilterType[] }) {}
}

export class SetPostList {
  static readonly type = '[Feed] SetPostList';
}

export class SetPost {
  static readonly type = '[Feed] SetPost';
  constructor(public payload: { post: Post }) {}
}

export class SetTimeModification {
  static readonly type = '[Feed] SetTimeModification';
  constructor(public readonly timeModification: TimeModification | null) {}
}

export class SetUserTime {
  static readonly type = '[Feed] SetUserTime';
  constructor(public readonly userTime: UserTime | null) {}
}
