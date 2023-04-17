import { SettingsRepository } from "@mp/api/settings/data-access";
import { IReadOldPasswordResponse, ReadOldPasswordCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IPasswordSettings } from "@mp/api/settings/util";

@CommandHandler(ReadOldPasswordCommand)
export class ReadOldPasswordHandler implements ICommandHandler<ReadOldPasswordCommand, IReadOldPasswordResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: ReadOldPasswordCommand) {
        // Debugging Purposes
        console.log(`${ReadOldPasswordHandler.name}`)

        // get request
        const request = command.request;

        const userPasswordSettings = await this.repository.readOldPassword(request.user);

        const responseData : IPasswordSettings = {oldpassword : userPasswordSettings.oldpassword, newpassword : userPasswordSettings.newpassword, verifynewpassword : userPasswordSettings.verifynewpassword, status : null};
        const response : IReadOldPasswordResponse = {"oldPassword" : responseData};

        return response;
    }
}