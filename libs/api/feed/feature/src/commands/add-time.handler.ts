import { FeedRepository } from '@mp/api/feed/data-access';
import { AddTimeResponse, AddTimeCommand, Status } from '@mp/api/feed/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';

@CommandHandler(AddTimeCommand)
export class AddTimeHandler implements ICommandHandler<AddTimeCommand, AddTimeResponse> {
    constructor(
        private readonly repository: FeedRepository
    ) {}

    async execute(command: AddTimeCommand) {
        
        const request = command.request;
    
        const status = await this.repository.addTime(request.modification);

        const responseData : Status = status;
        const response : AddTimeResponse = {"status" : responseData};
        
        return response;
    }
}