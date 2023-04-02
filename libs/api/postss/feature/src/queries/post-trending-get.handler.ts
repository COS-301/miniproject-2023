import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PostRepository } from '@mp/api/postss/data-access';
import { PostTrendingGetQuery } from '@mp/api/postss/util';
import { PostModule } from '../post.module';

@QueryHandler(PostTrendingGetQuery)
export class PostTrendingGetQueryHandler implements IQueryHandler<PostTrendingGetQuery> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(query: PostTrendingGetQuery): Promise<PostModule> {
    const posts = await this.postRepository.findTrendingByLikes();
    return new PostModule();
  }
}
