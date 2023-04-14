import { FetchUserPostsRequest } from '../requests';

export class FetchUserPostsCommand {
  constructor(public readonly request: FetchUserPostsRequest) {}
}
