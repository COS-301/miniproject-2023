import { SettingsRepository } from "@mp/api/settings/data-access";
import { IReadProfileSettingsResponse, ReadProfileSettingsCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IProfilePageSettings } from "@mp/api/settings/util";

@CommandHandler(ReadProfileSettingsCommand)
export class ReadProfileSettingsHandler implements ICommandHandler<ReadProfileSettingsCommand, IReadProfileSettingsResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: ReadProfileSettingsCommand) {
        // Debugging Purposes
        console.log(`${ReadProfileSettingsHandler.name}`)

        // get request
        const request = command.request;

        const userProfileSettings = await this.repository.readProfileSettings(request.user);

        const responseData : IProfilePageSettings = {profilePageSettings : userProfileSettings.profilePageSettings, status : null};
        const response : IReadProfileSettingsResponse = {"profileSettings" : responseData};

        return response;
    }
}