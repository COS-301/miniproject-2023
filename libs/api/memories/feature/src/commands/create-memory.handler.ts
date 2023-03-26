import { MemoryCreatedEvent, IMemory, CreateMemoryCommand } from '@mp/api/memories/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Memory } from '../models';

@CommandHandler(CreateMemoryCommand)
export class CreateMemoryHandler implements ICommandHandler<CreateMemoryCommand> {
  constructor(private publisher: EventPublisher) {}

  //TODO implement
  async execute(command: CreateMemoryCommand) {
    return null;
  }
}
