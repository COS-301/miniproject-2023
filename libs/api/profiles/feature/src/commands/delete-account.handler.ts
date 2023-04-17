import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { DeleteAccountCommand, IDeleteAccountResponse } from '@mp/api/profiles/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { Status } from '@mp/api/profiles/util';

@CommandHandler(DeleteAccountCommand)
export class DeleteAccountHandler implements ICommandHandler<DeleteAccountCommand, IDeleteAccountResponse> {
    constructor(
        private readonly repository: ProfilesRepository
    ) {}

    async execute(command: DeleteAccountCommand) {
        
        const request = command.request;
    
        const status = await this.repository.deleteAccount(request.deleteAccount);

        const responseData : Status = status;
        const response : IDeleteAccountResponse = {"status" : responseData};
        
        return response;
    }
}