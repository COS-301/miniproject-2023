import { ICommentOnPostRequest } from '../requests';

export class CreateNewCommentCommand {
  constructor(public readonly comment: ICommentOnPostRequest) {
    console.log("Made create new command");
  }
}