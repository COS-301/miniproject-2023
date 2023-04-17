import { IReadInformationSettingsRequest } from "../requests";

export class ReadInformationSettingsCommand {
    constructor(public readonly request: IReadInformationSettingsRequest) {

    }
}