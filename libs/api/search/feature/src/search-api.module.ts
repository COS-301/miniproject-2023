import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SearchHandler } from './commands'; 
import { SearchService } from './search-api.service';
import { UsersModule as UsersModuleAccessModule} from '@mp/api/search-api/data-access';

export const CommandHandlers = [
    SearchHandler
];

@Module({
    imports: [CqrsModule, UsersModuleAccessModule],
    providers: [
        SearchService,
        ...CommandHandlers
    ],
    exports: [SearchService],
})
export class SearchModule {}