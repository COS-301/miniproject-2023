import { FriendsModule as FriendsDataAccessModule } from '@mp/api/friends/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateFriendhandler } from './commands';
import { FriendRequestCreatedHandler } from './events';
import { FriendsService } from './friends.service';
export const CommandHandlers = [CreateFriendhandler];
export const EventHandlers = [FriendRequestCreatedHandler];

@Module({
  imports: [CqrsModule, FriendsDataAccessModule],
  providers: [FriendsService, ...CommandHandlers, ...EventHandlers],
  exports: [FriendsService],
})
export class FriendsModule {}
