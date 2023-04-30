import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { PostCreatedEvent } from '@mp/api/profiles/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(PostCreatedEvent)
export class PostCreatedHandler
  implements IEventHandler<PostCreatedEvent>
{
  constructor(private readonly repository: ProfilesRepository) {}

  async handle(event: PostCreatedEvent) {
    console.log(`${PostCreatedHandler.name}`);
    await this.repository.updateProfile(event.profile);
  }
}