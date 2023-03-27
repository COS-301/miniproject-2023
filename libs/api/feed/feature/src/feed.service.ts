import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import {
    FetchPostsRequest,
    FetchPostsResponse,
    GetUserTimeRequest,
    GetUserTimeResponse,
    AddTimeRequest,
    AddTimeResponse,
    FetchPostsCommand
} from '@mp/api/feed/util';

@Injectable()
export class FeedService {
    constructor(private readonly commandBus: CommandBus) {}

    // fetch posts
    // get time
    // add time

    
    /*
    * Fetches all of the posts
    */
    async fetchPosts(
        request: any
    ): Promise<any> {
        return await this.commandBus.execute<
            any, 
            any
        >(new (request));
    }

    // async getTime(
    //     reqeust: GetUserTimeRequest
    // ): Promise<GetUserTimeResponse> {
    //     return await this.commandBus.execute<
    //         GetUserTimeCommand,
    //         GetUserTimeResponse
    //     >(new GetUserTimeCommand(request));
    // }

    // async addtime(
    //     request: AddTimeRequest
    // ): Promise<AddTimeResponse> {
    //     return await this.commandBus.execute<
    //         AddTimeCommand,
    //         AddTimeResponse
    //     >(new AddTimeCommand(request));
    // }

}
