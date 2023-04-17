import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { GetFriendsCommand, GetFriendsRequest, GetFriendsResponse} from "@mp/api/friends/util";
import { RemoveFriendCommand, RemoveFriendRequest, RemoveFriendResponse} from "@mp/api/friends/util";

@Injectable()
export class FriendsService {
    constructor(private readonly commandBus : CommandBus) { }

    async getFriends(
        request : GetFriendsRequest
    ): Promise<GetFriendsResponse> {
        return await this.commandBus.execute<
        GetFriendsCommand, 
            GetFriendsResponse
            >(new GetFriendsCommand(request));
    }

    async removeFriend(
        request : RemoveFriendRequest
    ): Promise<RemoveFriendResponse> {
        return await this.commandBus.execute<
        RemoveFriendCommand, 
            RemoveFriendResponse
            >(new RemoveFriendCommand(request));
    }
}
