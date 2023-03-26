import { ICommentOnPostRequest } from '../requests';

export class CommentOnPostCommand{
    constructor(public readonly request: ICommentOnPostRequest) {}
  }