import { SettingsRepository } from "@mp/api/settings/data-access";
import { IUpdateProfileSettingsResponse, UpdateProfileSettingsCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IProfilePageSettings } from "@mp/api/settings/util";
import { IUser } from "@mp/api/users/util";

@CommandHandler(UpdateProfileSettingsCommand)
export class UpdateProfileSettingsHandler implements ICommandHandler<UpdateProfileSettingsCommand, IUpdateProfileSettingsResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: UpdateProfileSettingsCommand) {
        // Debugging Purposes
        console.log(`${UpdateProfileSettingsHandler.name}`)

        // get request
        const request = command.request;

        const userProfileSettings = await this.repository.updateProfileSettings(request.user);

        const responseData : IProfilePageSettings = {profilePageSettings : userProfileSettings.profilePageSettings, status : userProfileSettings.status};
        const response : IUpdateProfileSettingsResponse = {"profileSettings" : responseData};

        return response;
    }
}