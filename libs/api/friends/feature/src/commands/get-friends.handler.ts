import { FriendsRepository } from "@mp/api/friends/data-access";
import { GetFriendsCommand, GetFriendsResponse } from "@mp/api/friends/util";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FriendsList } from "@mp/api/friends/util";

@CommandHandler(GetFriendsCommand)
export class GetFriendsHandler implements ICommandHandler<GetFriendsCommand, GetFriendsResponse>{
    constructor(
            private readonly repository : FriendsRepository
    ) { }

    async execute(command : GetFriendsCommand){
        console.log(`${GetFriendsHandler.name}`);

        const request = command.request;
        const miniProfile = request.miniProfile;
        const getFriendsDoc = await this.repository.getFriends(miniProfile);

        let flag = false;
        if (getFriendsDoc.data.length != 0 ) {
            flag = true;
        }

        const responseData : FriendsList = {"friendFound" : flag, "list" : getFriendsDoc.data};

        const response : GetFriendsResponse = {"friends" : responseData};

        return response;

    }
}