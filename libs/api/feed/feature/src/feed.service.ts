import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AddTimeCommand, AddTimeRequest, AddTimeResponse, 
    FetchPostsCommand, FetchPostsRequest, FetchPostsResponse, GetUserTimeCommand, GetUserTimeRequest, GetUserTimeResponse } from '@mp/api/feed/util';

@Injectable()
export class FeedService {
    constructor(private readonly commandBus: CommandBus) {}

    async fetchPosts(
        request: FetchPostsRequest
    ): Promise<FetchPostsResponse> {
        return await this.commandBus.execute<
        FetchPostsCommand, 
            FetchPostsResponse
        >(new FetchPostsCommand(request));
    }

    async addTime(
        request: AddTimeRequest
    ): Promise<AddTimeResponse> {
        return await this.commandBus.execute<
        AddTimeCommand, 
            AddTimeResponse
        >(new AddTimeCommand(request));
    }

    async getUserTime(
        request: GetUserTimeRequest
    ): Promise<GetUserTimeResponse> {
        return await this.commandBus.execute<
        GetUserTimeCommand, 
            GetUserTimeResponse
        >(new GetUserTimeCommand(request));
    }



}
