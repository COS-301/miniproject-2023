import { IPosts } from '../interfaces';

export class PostTrendingGetQuery {
  constructor(public readonly profile: IPosts) {}
}