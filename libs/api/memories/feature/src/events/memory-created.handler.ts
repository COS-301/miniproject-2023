import { MemoryRepository } from '@mp/api/memories/data-access';
import { MemoryCreatedEvent } from '@mp/api/memories/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MemoryCreatedEvent)
export class MemoryCreatedHandler implements IEventHandler<MemoryCreatedEvent> {
  constructor(private readonly repository: MemoryRepository) {}

  //TODO implement
  async handle(event: MemoryCreatedEvent) {
    return null;
  }
}
