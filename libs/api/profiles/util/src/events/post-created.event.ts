import { IProfile } from '../interfaces';

export class PostCreatedEvent {
  constructor(public readonly profile: IProfile) {}
}
