import { Module } from '@nestjs/common';
import {MessageRepository} from './message.repository';

@Module({
  providers: [MessageRepository],
  exports: [MessageRepository],
})
export class MessageModule {}
