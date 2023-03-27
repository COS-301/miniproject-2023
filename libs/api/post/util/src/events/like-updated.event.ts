import { IPost } from '../interfaces';

export class LikeUpdatedEvent {
  constructor(public readonly profile: IPost) {}
}
