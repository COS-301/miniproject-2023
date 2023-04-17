import { SettingsRepository } from "@mp/api/settings/data-access";
import { IUpdatePrivacySettingsResponse, UpdatePrivacySettingsCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IPrivacySettings } from "@mp/api/settings/util";

@CommandHandler(UpdatePrivacySettingsCommand)
export class UpdatePrivacySettingsHandler implements ICommandHandler<UpdatePrivacySettingsCommand, IUpdatePrivacySettingsResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: UpdatePrivacySettingsCommand) {
        // Debugging Purposes
        console.log(`${UpdatePrivacySettingsHandler.name}`)

        // get request
        const request = command.request;

        const userPrivacySettings = await this.repository.updatePrivacySettings(request.user);

        const responseData : IPrivacySettings = {privacySettings : userPrivacySettings.privacySettings, status : userPrivacySettings.status};
        const response : IUpdatePrivacySettingsResponse = {"privacySettings" : responseData};

        return response;
    }
}