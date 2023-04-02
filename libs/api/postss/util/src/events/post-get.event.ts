import { IPost } from '../interfaces';

export class PostGetEvent {
  constructor(public readonly profile: IPost) {}
}

