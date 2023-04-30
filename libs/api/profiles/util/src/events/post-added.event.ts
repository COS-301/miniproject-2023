import { IProfile } from '../interfaces';

export class PostAddedEvent {
  constructor(public readonly profile: IProfile) {}
}