import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { FetchUserPostsCommand, IFetchUserPostsResponse } from '@mp/api/profiles/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
// import { RelationEnum } from 'libs/api/profiles/util/src/enums/relations.enum';
import { IPostList, Post } from '@mp/api/profiles/util';
// import { IRelation } from 'libs/api/profiles/util/src/interfaces/relation.interface';

@CommandHandler(FetchUserPostsCommand)
export class FetchUserPostsHandler implements ICommandHandler<FetchUserPostsCommand, IFetchUserPostsResponse> {
    constructor(
        private readonly repository: ProfilesRepository
    ) {}

    async execute(command: FetchUserPostsCommand) {
        // For debugging
        console.log(`${FetchUserPostsHandler.name}`);

        // This object will contain the data sent by the request (whose interface you have already defined)
        const request = command.request;
        
        // Get the parameters from the request (in this case the filters)
        const userProfile = request.userProfile

        // Call the function to get the data from the DB (need to pass in the list of filters to determine query to make)
        const fetchUserPostsDoc = await this.repository.fetchUserPosts(userProfile);

        const responseData: IPostList = {"postsFound": fetchUserPostsDoc.postsFound, "list": fetchUserPostsDoc.list };

        const response : IFetchUserPostsResponse = {"posts" : responseData};
        
        return response;
    }
}