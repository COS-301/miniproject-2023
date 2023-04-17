import { IReadPrivacySettingsRequest } from "../requests";

export class ReadPrivacySettingsCommand {
    constructor(public readonly request: IReadPrivacySettingsRequest) {
        
    }
}