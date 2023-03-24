import { ICreatePostRequest } from '../requests';

export class CreatePostCommand {
  constructor(public readonly request: ICreatePostRequest) {}
}
