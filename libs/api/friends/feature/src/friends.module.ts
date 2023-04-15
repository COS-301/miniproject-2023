import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { GetFriendsHandler, RemoveFriendHandler } from "./commands";
import { FriendsModule as FriendsModuleAccessModule } from "@mp/api/friends/data-access";
import { FriendsService } from "./friends.service";


export const CommandHandlers = [
    GetFriendsHandler, 
    RemoveFriendHandler
];

@Module({
        imports: [CqrsModule, FriendsModuleAccessModule], 
        providers: [
            FriendsService,
            ...CommandHandlers
        ],
        exports: [FriendsService],
    })

export class FriendsModule{}

