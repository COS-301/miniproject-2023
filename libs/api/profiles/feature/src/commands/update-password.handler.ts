import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { UpdatePasswordCommand, IUpdatePasswordResponse } from '@mp/api/profiles/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { Status } from '@mp/api/profiles/util';

@CommandHandler(UpdatePasswordCommand)
export class UpdatePasswordHandler implements ICommandHandler<UpdatePasswordCommand, IUpdatePasswordResponse> {
    constructor(
        private readonly repository: ProfilesRepository
    ) {}

    async execute(command: UpdatePasswordCommand) {
        
        const request = command.request;
    
        const status = await this.repository.updatePassword(request.update);

        const responseData : Status = status;
        const response : IUpdatePasswordResponse = {status: responseData};
        
        return response;
    }
}