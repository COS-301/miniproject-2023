import { IPost } from '../interfaces';

export class TotaltimeUpdateEvent {
  constructor(public readonly post: IPost) {}
}
