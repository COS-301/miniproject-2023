import { Module } from '@nestjs/common';
import { SearchRepository } from './search-api.repository';

@Module({
    providers: [SearchRepository],
    exports: [SearchRepository],
})

export class UsersModule {}