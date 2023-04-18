import { FriendsRepository } from '@mp/api/friends/data-access';
import { FriendRequestCreatedEvent } from '@mp/api/friends/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(FriendRequestCreatedEvent)
export class FriendRequestCreatedHandler implements IEventHandler<FriendRequestCreatedEvent> {
  constructor(private readonly repository: FriendsRepository) {}

  async handle(event: FriendRequestCreatedEvent) {
    console.log(`${FriendRequestCreatedHandler.name}`);
    await this.repository.createFriendRequest(event.friendRequest);
  }
}
