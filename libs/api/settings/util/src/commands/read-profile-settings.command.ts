import { IReadProfileSettingsRequest } from "../requests";

export class ReadProfileSettingsCommand {
    constructor(public readonly request: IReadProfileSettingsRequest) {
        
    }
}