import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { SearchCommand, SearchRequest, SearchResponse } from '@mp/api/search/util';

@Injectable()
export class SearchService {
    constructor(private readonly commandBus: CommandBus) {}

    async search(
        request: SearchRequest
    ): Promise<SearchResponse> {
        return await this.commandBus.execute<
        SearchCommand, 
        SearchResponse
        >(new SearchCommand(request));
    }

}