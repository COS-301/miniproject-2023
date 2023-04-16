import { SettingsRepository } from "@mp/api/settings/data-access";
import { IUpdateNewPasswordResponse, UpdateNewPasswordCommand } from '@mp/api/settings/util';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IPasswordSettings } from "@mp/api/settings/util";

@CommandHandler(UpdateNewPasswordCommand)
export class UpdateNewPasswordHandler implements ICommandHandler<UpdateNewPasswordCommand, IUpdateNewPasswordResponse> {
    constructor(public readonly repository: SettingsRepository) {

    }

    async execute(command: UpdateNewPasswordCommand) {
        // Debugging Purposes
        console.log(`${UpdateNewPasswordHandler.name}`)

        // get request
        const request = command.request;

        const userPasswordSettings = await this.repository.updateNewPassword(request.user);

        const responseData : IPasswordSettings = {oldpassword : userPasswordSettings.oldpassword, newpassword : userPasswordSettings.newpassword, verifynewpassword : userPasswordSettings.verifynewpassword, status : userPasswordSettings.status};
        const response : IUpdateNewPasswordResponse = {"newPassword" : responseData};

        return response;
    }
}