import { FetchPostsRequest } from '../requests';

export class FetchPostsCommand {
  constructor(public readonly request: FetchPostsRequest) {
    
  }
}