import { ILikePostRequest } from '../requests';

export class LikePostCommand {
  constructor(public readonly request: ILikePostRequest) {}
}