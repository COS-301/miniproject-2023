import { CreatePostRepository } from '@mp/api/createpost/data-access';
import { CreatePostResponse, CreatePostCommand, Status } from '@mp/api/createpost/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand, CreatePostResponse> {
    constructor(
        private readonly repository: CreatePostRepository
    ) {}

    async execute(command: CreatePostCommand) {
        
        const request = command.request;
    
        const status = await this.repository.createPost(request.post);

        const responseData : Status = status;
        const response : CreatePostResponse = {"status" : responseData};
        
        return response;
    }
}