import { IGetPrivacySettingsRequest } from "../requests";

export class GetPrivacySettingsCommand {
    constructor(public readonly request: IGetPrivacySettingsRequest) {
        
    }
}