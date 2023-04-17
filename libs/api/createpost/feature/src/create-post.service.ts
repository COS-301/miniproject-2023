import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePostCommand, CreatePostRequest, CreatePostResponse } from '@mp/api/createpost/util';

@Injectable()
export class CreatePostService {
    constructor(private readonly commandBus: CommandBus) {}

    async createPost(
        request: CreatePostRequest
    ): Promise<CreatePostResponse> {
        return await this.commandBus.execute<
        CreatePostCommand, 
            CreatePostResponse
        >(new CreatePostCommand(request));
    }
}