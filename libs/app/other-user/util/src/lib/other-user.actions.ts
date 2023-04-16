import { IProfile } from '@mp/api/profiles/util';
import { IRelation } from 'libs/api/profiles/util/src/interfaces/relation.interface';


export class SetError {
  static readonly type = '[Errors] SetError';
  constructor(public readonly error: string | null) {}
}


export class UpdateRelation {
  static readonly type = '[OtherUser] UpdateRelation';
  constructor(public readonly relation: string | null) {}
}

export class SetRelation {
  static readonly type = '[OtherUser] SetRelation';
  // constructor(public readonly relation: string | null) {}
}

export class SetPosts {
  static readonly type = '[OtherUser] SetPosts';
  constructor(public readonly profile: IProfile | null) {}
}