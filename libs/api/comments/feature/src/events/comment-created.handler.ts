import { CommentCreatedEvent } from '@mp/api/comments/util';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { CommentRepository } from '@mp/api/comments/data-access';

@EventsHandler(CommentCreatedEvent)
export class CommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
  constructor(private readonly repository: CommentRepository) {}

  //TODO implement
  async handle(event: CommentCreatedEvent) {
    return null;
  }
}
