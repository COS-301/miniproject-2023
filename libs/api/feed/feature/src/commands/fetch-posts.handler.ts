import { FeedRepository } from '@mp/api/feed/data-access';
import { FetchPostsResponse, FetchPostsCommand } from '@mp/api/feed/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
// import {Posts as IPost} from '../models';

@CommandHandler(FetchPostsCommand)
export class FetchPostsHandler implements ICommandHandler<FetchPostsCommand, FetchPostsResponse> {
    constructor(
        private readonly repository: FeedRepository
    ) {}

    async execute(command: FetchPostsCommand) {
        console.log(`${FetchPostsHandler.name}`);

        const request = command.request;
        const postsDoc = await this.repository.fetchPosts();
        const postsData = postsDoc;

        if(!postsData) throw new Error('Posts not found');

        const response: any = {postsData};
        return response;
    }
}