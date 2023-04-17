import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { UpdatePrivacySettingsCommand, IUpdatePrivacySettingsResponse } from '@mp/api/profiles/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { Status } from '@mp/api/profiles/util';

@CommandHandler(UpdatePrivacySettingsCommand)
export class UpdatePrivacySettingsHandler implements ICommandHandler<UpdatePrivacySettingsCommand, IUpdatePrivacySettingsResponse> {
    constructor(
        private readonly repository: ProfilesRepository
    ) {}

    async execute(command: UpdatePrivacySettingsCommand) {
        
        const request = command.request;
    
        const status = await this.repository.updatePrivacySettings(request.privacySettings.profile);

        const responseData : Status = status;
        const response : IUpdatePrivacySettingsResponse = {status: responseData};
        
        return response;
    }
}