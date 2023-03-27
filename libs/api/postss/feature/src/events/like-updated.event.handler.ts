import { PostRepository } from '@mp/api/postss/data-access';
import { LikeUpdatedEvent } from '@mp/api/postss/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(LikeUpdatedEvent)
export class UpdateLikedCountEventHandler
  implements IEventHandler<LikeUpdatedEvent>
{
  constructor(private readonly repository: PostRepository) {}

  async handle(event: LikeUpdatedEvent) {
    console.log(`${UpdateLikedCountEventHandler.name}`);
    await this.repository.updatePost(event.post);
  }
}
