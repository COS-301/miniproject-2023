import { IUpdateProfileSettingsRequest } from "../requests";

export class UpdateProfileSettingsCommand {
    constructor(public readonly request: IUpdateProfileSettingsRequest) {
        
    }
}