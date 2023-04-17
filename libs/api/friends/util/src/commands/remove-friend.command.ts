import { RemoveFriendRequest} from "../requests";

export class RemoveFriendCommand {
    constructor( public readonly request: RemoveFriendRequest) {
        
    }
}