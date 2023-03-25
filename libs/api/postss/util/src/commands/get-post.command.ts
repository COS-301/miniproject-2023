import { IGetPostRequest } from '../requests';

export class GetPostCommand {
  constructor(public readonly request: IGetPostRequest) {}
}