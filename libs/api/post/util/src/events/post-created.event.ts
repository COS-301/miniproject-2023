import { IPost } from '../interfaces';

export class ProfileCreatedEvent {
  constructor(public readonly profile: IPost) {}
}
