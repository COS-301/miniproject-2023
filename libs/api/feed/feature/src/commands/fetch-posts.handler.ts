import { FeedRepository } from '@mp/api/feed/data-access';
import { FetchPostsResponse, FetchPostsCommand } from '@mp/api/feed/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { PostList } from '@mp/api/feed/util';

@CommandHandler(FetchPostsCommand)
export class FetchPostsHandler implements ICommandHandler<FetchPostsCommand, FetchPostsResponse> {
    constructor(
        private readonly repository: FeedRepository
    ) {}

    async execute(command: FetchPostsCommand) {
        // For debugging
        console.log(`${FetchPostsHandler.name}`);

        // This object will contain the data sent by the request (whose interface you have already defined)
        const request = command.request;
        
        // Get the parameters from the request (in this case the filters)
        const filters = request.filters

        // Call the function to get the data from the DB (need to pass in the list of filters to determine query to make)
        const postsDoc = await this.repository.fetchPosts(filters);

        // Some logic to determine if any posts were returned
        let flag = false;
        if (postsDoc.data.length != 0){
            flag = true;
        }
        
        // Format data into appropriate interface
        const responseData: PostList = {"postsFound": flag, "list" : postsDoc.data};

        // Format the data from above to match the interface defined for the response
        const response : FetchPostsResponse = {"posts" : responseData};
        
        return response;
    }
}