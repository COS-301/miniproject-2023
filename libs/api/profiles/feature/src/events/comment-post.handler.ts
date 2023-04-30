import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { CommentCreatedEvent } from '@mp/api/profiles/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommentCreatedEvent)
export class PostCreatedHandler
  implements IEventHandler<CommentCreatedEvent>
{
  constructor(private readonly repository: ProfilesRepository) {}

  async handle(event: CommentCreatedEvent) {
    console.log(`${CommentCreatedEvent.name}`);
    await this.repository.updateProfile(event.profile);
  }
}