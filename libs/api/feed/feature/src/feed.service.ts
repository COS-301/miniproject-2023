import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FetchPostsCommand } from '@mp/api/feed/util';

@Injectable()
export class FeedService {
    constructor(private readonly commandBus: CommandBus) {}

    async fetchPosts(
        request: any
    ): Promise<any> {
        return await this.commandBus.execute<
        FetchPostsCommand, 
            any
        >(new FetchPostsCommand(request));
    }

}
