import { SettingsRepository } from "@mp/api/settings/data-access";
import { IReadInformationSettingsResponse, ReadInformationSettingsCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IInformationSettings } from "@mp/api/settings/util";

@CommandHandler(ReadInformationSettingsCommand)
export class ReadInformationSettingsHandler implements ICommandHandler<ReadInformationSettingsCommand, IReadInformationSettingsResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: ReadInformationSettingsCommand) {
        // Debugging Purposes
        console.log(`${ReadInformationSettingsHandler.name}`)

        // get request
        const request = command.request;

        const userInformationSettings = await this.repository.readInformationSettings(request.user);

        const responseData : IInformationSettings = {informationSettings : userInformationSettings.informationSettings, status : null};
        const response : IReadInformationSettingsResponse = {"informationSettings" : responseData};

        return response;
    }
}