import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { GetPrivacySettingsCommand, IGetPrivacySettingsResponse } from '@mp/api/profiles/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { PrivacyStatus } from '@mp/api/profiles/util';

@CommandHandler(GetPrivacySettingsCommand)
export class GetPrivacySettingsHandler implements ICommandHandler<GetPrivacySettingsCommand, IGetPrivacySettingsResponse> {
    constructor(
        private readonly repository: ProfilesRepository
    ) {}

    async execute(command: GetPrivacySettingsCommand) {
        
        const request = command.request;
    
        const status = await this.repository.getPrivacySettings(request.profile);

        const responseData : PrivacyStatus = status;
        const response : IGetPrivacySettingsResponse = {privacyStatus: responseData};
        
        return response;
    }
}