import { MemoryModule as MemoriesDataAccessModule } from '@mp/api/memories/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
    CreateMemoryHandler,
} from './commands';
import {
    MemoryCreatedHandler,
    
} from './events';
import { MemoriesSagas } from './memories.sagas';
import { MemoriesService } from './memories.service';

export const CommandHandlers = [
  CreateMemoryHandler,
];
export const EventHandlers = [
  MemoryCreatedHandler,
];

@Module({
  imports: [CqrsModule, MemoriesDataAccessModule],
  providers: [
    MemoriesService,
    ...CommandHandlers,
    ...EventHandlers,
    MemoriesSagas,
  ],
  exports: [MemoriesService],
})
export class MemoriesModule {}