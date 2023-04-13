import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { FetchPostsHandler } from './commands'; 
import { FeedService } from './feed.service';
import { PostModule as PostModuleAccessModule} from '@mp/api/feed/data-access';

export const CommandHandlers = [
    FetchPostsHandler
];

@Module({
    imports: [CqrsModule, PostModuleAccessModule],
    providers: [
        FeedService,
        ...CommandHandlers
    ],
    exports: [FeedService],
})
export class FeedModule {}