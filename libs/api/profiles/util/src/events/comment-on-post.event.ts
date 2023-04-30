import { IComment, IProfile } from '../interfaces';

export class CommentCreatedEvent {
  constructor(public readonly profile: IProfile) {}
}
