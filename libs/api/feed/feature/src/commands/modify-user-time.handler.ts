import { FeedRepository } from '@mp/api/feed/data-access';
import { ModifyUserTimeResponse, ModifyUserTimeCommand, Status } from '@mp/api/feed/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';

@CommandHandler(ModifyUserTimeCommand)
export class ModifyUserTimeHandler implements ICommandHandler<ModifyUserTimeCommand, ModifyUserTimeResponse> {
    constructor(
        private readonly repository: FeedRepository
    ) {}

    async execute(command: ModifyUserTimeCommand) {
        
        const request = command.request;
    
        const status = await this.repository.modifyUserTime(request.modification);

        const responseData : Status = status;
        const response : ModifyUserTimeResponse = {"status" : responseData};
        
        return response;
    }
}