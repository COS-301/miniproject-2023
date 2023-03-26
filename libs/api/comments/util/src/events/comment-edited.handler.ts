import { IComment } from '../interfaces';

export class CommentEditedEvent {
  constructor(public readonly: IComment) {}
}
