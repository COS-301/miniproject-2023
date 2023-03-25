import { IPost } from '../interfaces';

export class ProfileLikedEvent {
  constructor(public readonly profile: IPost) {}
}
