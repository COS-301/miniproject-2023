import { IPost } from '../interfaces';

export class TotaltimeUpdateEvent {
  constructor(public readonly profile: IPost) {}
}
