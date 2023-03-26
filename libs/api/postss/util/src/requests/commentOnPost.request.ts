import { IComment } from '../interfaces/comment.interface';

export interface ICommentOnPostRequest {
  postId: string;
  comment: IComment;
}