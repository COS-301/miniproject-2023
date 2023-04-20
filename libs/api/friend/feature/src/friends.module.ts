import { FriendsModule as FriendsDataAccessModule } from '@mp/api/friend/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CreateFriendHandler,
} from './commands';
import {
  FriendRequestCreatedHandler,
} from './events';
import { FriendsService } from './friends.service';
export const CommandHandlers = [
  CreateFriendHandler
];
export const EventHandlers = [
  FriendRequestCreatedHandler
];

@Module({
  imports: [CqrsModule, FriendsDataAccessModule],
  providers: [FriendsService, ...CommandHandlers, ...EventHandlers],
  exports: [FriendsService],
})
export class FriendsModule {}
