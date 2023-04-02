import { IGetPostRequest } from '../requests';

import {
    Hashtag
  } from '../enums/hashtag.enum'

export class GetPostCommand {
  constructor(public readonly request: IGetPostRequest) {}
}
export class GetPostByHashtag {
    constructor(public hashtag: Hashtag) { }
  }