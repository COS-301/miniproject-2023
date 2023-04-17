import { IUpdatePasswordRequest } from "../requests";

export class UpdatePasswordCommand {
    constructor(public readonly request: IUpdatePasswordRequest) {
        
    }
}