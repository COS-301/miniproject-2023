import { IDeleteAccountRequest } from "../requests";

export class DeleteAccountCommand {
    constructor(public readonly request: IDeleteAccountRequest) {
        
    }
}