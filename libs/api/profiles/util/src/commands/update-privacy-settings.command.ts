import { IUpdatePrivacySettingsRequest } from "../requests";

export class UpdatePrivacySettingsCommand {
    constructor(public readonly request: IUpdatePrivacySettingsRequest) {
        
    }
}