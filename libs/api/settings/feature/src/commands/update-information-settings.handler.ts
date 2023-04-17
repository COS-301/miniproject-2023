import { SettingsRepository } from "@mp/api/settings/data-access";
import { IUpdateInformationSettingsResponse, UpdateInformationSettingsCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IInformationSettings } from "@mp/api/settings/util";

@CommandHandler(UpdateInformationSettingsCommand)
export class UpdateInformationSettingsHandler implements ICommandHandler<UpdateInformationSettingsCommand, IUpdateInformationSettingsResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: UpdateInformationSettingsCommand) {
        // Debugging Purposes
        console.log(`${UpdateInformationSettingsHandler.name}`)

        // get request
        const request = command.request;

        const userInformationSettings = await this.repository.updateInformationSettings(request.user);

        const responseData : IInformationSettings = {informationSettings : userInformationSettings.informationSettings, status : userInformationSettings.status};
        const response : IUpdateInformationSettingsResponse = {"informationSettings" : responseData};

        return response;
    }
}