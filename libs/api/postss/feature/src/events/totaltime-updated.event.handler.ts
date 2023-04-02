
import { TotaltimeUpdateEvent } from '@mp/api/postss/util';
import { PostRepository } from '@mp/api/postss/data-access';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(TotaltimeUpdateEvent)
export class TotaltimeUpdateEventHandler
  implements IEventHandler<TotaltimeUpdateEvent>
{
  constructor(private readonly repository: PostRepository) {}

  async handle(event: TotaltimeUpdateEvent) {
    console.log(`${TotaltimeUpdateEventHandler.name}`);
    await this.repository.updatePost(event.post);
  }
}
