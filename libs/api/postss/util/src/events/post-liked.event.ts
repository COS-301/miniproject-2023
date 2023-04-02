import { IPost } from '../interfaces';

export class PostLikedEvent {
  constructor(public readonly profile: IPost) {}
}
