import { SearchRepository } from '@mp/api/search/data-access';
import { SearchResponse, SearchCommand } from '@mp/api/search/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { ProfilesList } from '@mp/api/search/util';

@CommandHandler(SearchCommand)
export class SearchHandler implements ICommandHandler<SearchCommand, SearchResponse> {
    constructor(
        private readonly repository: SearchRepository
    ) {}

    async execute(command: SearchCommand) {
        const request = command.request;
        const user = request.username;
        const userD = await this.repository.search(user);

        let boolProfile = false;
        if (userD.data.length != 0){
            boolProfile = true;
        }
        
        const responseData: ProfilesList = {"userFound": boolProfile, "list" : userD.data}; //image username
        const response : SearchResponse = {"profiles" : responseData};
        
        return response;
    }
}