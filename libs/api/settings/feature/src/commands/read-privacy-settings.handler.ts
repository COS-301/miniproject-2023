import { SettingsRepository } from "@mp/api/settings/data-access";
import { IReadPrivacySettingsResponse, ReadPrivacySettingsCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IPrivacySettings } from "@mp/api/settings/util";

@CommandHandler(ReadPrivacySettingsCommand)
export class ReadPrivacySettingsHandler implements ICommandHandler<ReadPrivacySettingsCommand, IReadPrivacySettingsResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: ReadPrivacySettingsCommand) {
        // Debugging Purposes
        console.log(`${ReadPrivacySettingsHandler.name}`)

        // get request
        const request = command.request;

        const userPrivacySettings = await this.repository.readPrivacySettings(request.user);

        const responseData : IPrivacySettings = {privacySettings : userPrivacySettings.privacySettings, status : null};
        const response : IReadPrivacySettingsResponse = {"privacySettings" : responseData};

        return response;
    }
}