import { IProfile } from '@mp/api/profiles/util';
import { IRelation } from 'libs/api/profiles/util/src/interfaces/relation.interface';


export class SetError {
  static readonly type = '[Errors] SetError';
  constructor(public readonly error: string | null) {}
}


export class UpdateRelation {
  static readonly type = '[Profile] UpdateRelation';
  constructor(public readonly relation: string | null) {}
}


// Do checkRelation next
