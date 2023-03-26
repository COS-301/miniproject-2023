import { Module } from '@nestjs/common';
import { MemoryRepository } from './memory.repository';

@Module({
  providers: [MemoryRepository],
  exports: [MemoryRepository],
})
export class MemoryModule {}
