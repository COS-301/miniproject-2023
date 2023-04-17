import { IUpdateInformationSettingsRequest } from "../requests";

export class UpdateInformationSettingsCommand {
    constructor(public readonly request: IUpdateInformationSettingsRequest) {
        
    }
}