import { CommentEditedEvent } from '@mp/api/comments/util';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { CommentRepository } from '@mp/api/comments/data-access';

@EventsHandler(CommentEditedEvent)
export class CommentEditedHandler implements IEventHandler<CommentEditedEvent> {
  constructor(private readonly repository: CommentRepository) {}

  //TODO implement
  async handle(event: CommentEditedEvent) {
    return null;
  }
}
