import { IUser } from '../interfaces';

export class UserCreatedEvent {
  post: any;
  constructor(public readonly user: IUser) {}
}
