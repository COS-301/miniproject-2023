import { Module } from '@nestjs/common';
import { CreatePostRepository } from './create-post.repository';

@Module({
    providers: [CreatePostRepository],
    exports: [CreatePostRepository],
})

export class PostModule {}