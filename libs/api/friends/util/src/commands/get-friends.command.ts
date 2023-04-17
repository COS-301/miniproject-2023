import { GetFriendsRequest } from "../requests";

export class GetFriendsCommand {
    constructor(public readonly request: GetFriendsRequest) { 
        
    }
}