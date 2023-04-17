import { IReadOldPasswordRequest } from "../requests";

export class ReadOldPasswordCommand {
    constructor(public readonly request: IReadOldPasswordRequest) {
        
    }
}