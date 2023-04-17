import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePostHandler } from './commands'; 
import { CreatePostService } from './create-post.service';
import { PostModule as PostModuleAccessModule} from '@mp/api/createpost/data-access';

export const CommandHandlers = [
    CreatePostHandler
];

@Module({
    imports: [CqrsModule, PostModuleAccessModule],
    providers: [
        CreatePostService,
        ...CommandHandlers
    ],
    exports: [CreatePostService],
})
export class CreatePostModule {}