import { FeedRepository } from '@mp/api/feed/data-access';
import { GetUserTimeResponse, GetUserTimeCommand, UserTime } from '@mp/api/feed/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';

@CommandHandler(GetUserTimeCommand)
export class GetUserTimeHandler implements ICommandHandler<GetUserTimeCommand, GetUserTimeResponse> {
    constructor(
        private readonly repository: FeedRepository
    ) {}

    async execute(command: GetUserTimeCommand) {
        
        const request = command.request;
    
        const userTime = await this.repository.getUserTime(request.user);

        const responseData : UserTime = {timeRemaining : userTime.timeRemaing, timeAmount : userTime.value};
        const response : GetUserTimeResponse = {"userTime" : responseData};
        
        return response;
    }
}