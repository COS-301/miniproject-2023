import { FriendsRepository } from "@mp/api/friends/data-access";
import { RemoveFriendCommand, RemoveFriendResponse } from "@mp/api/friends/util";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Status } from "@mp/api/friends/util";

@CommandHandler(RemoveFriendCommand)
export class RemoveFriendHandler implements ICommandHandler<RemoveFriendCommand, RemoveFriendResponse> {
    constructor(
        private readonly repository : FriendsRepository
    ) { }

    async execute(command : RemoveFriendCommand){
        const request = command.request;
        const status = await this.repository.removeFriend(request.user, request.removedfriend);

        const responseData : Status = status;
        const response : RemoveFriendResponse = {"status": responseData};
        

        return response;
    }
}