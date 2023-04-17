import { IUpdateNewPasswordRequest } from "../requests";

export class UpdateNewPasswordCommand {
    constructor(public readonly request: IUpdateNewPasswordRequest) {
        
    }
}