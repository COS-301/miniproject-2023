import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { PostAddedEvent } from '@mp/api/profiles/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(PostAddedEvent)
export class PostAddedHandler
  implements IEventHandler<PostAddedEvent>
{
  constructor(private readonly repository: ProfilesRepository) {}

  async handle(event: PostAddedEvent) {
    console.log(`${PostAddedHandler.name}`);
    await this.repository.updateProfile(event.profile);
  }
}