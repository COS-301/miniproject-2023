import { PostRepository } from '@mp/api/postss/data-access';
import { PostCreatedEvent } from '@mp/api/postss/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(PostCreatedEvent)
export class PostCreatedHandler
  implements IEventHandler<PostCreatedEvent>
{
  constructor(private readonly repository: PostRepository) {}

  async handle(event: PostCreatedEvent) {
    console.log(`${PostCreatedHandler.name}`);
    await this.repository.createPost(event.profile);
  }
}
