import { IComment, IProfile } from '../interfaces';

export class CreateCommentEvent {
  constructor(public readonly profile: IProfile) {}
}
