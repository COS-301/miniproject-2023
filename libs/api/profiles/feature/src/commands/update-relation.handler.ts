import { ProfilesRepository } from '@mp/api/profiles/data-access';
import { UpdateRelationCommand, IUpdateRelationResponse, Status } from '@mp/api/profiles/util';
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { RelationEnum } from 'libs/api/profiles/util/src/enums/relations.enum';
import { IRelation } from 'libs/api/profiles/util/src/interfaces/relation.interface';

@CommandHandler(UpdateRelationCommand)
export class UpdateRelationHandler implements ICommandHandler<UpdateRelationCommand, IUpdateRelationResponse> {
    constructor(
        private readonly repository: ProfilesRepository
    ) {}

    async execute(command: UpdateRelationCommand) {
        // For debugging
        console.log(`${UpdateRelationHandler.name}`);

        // This object will contain the data sent by the request (whose interface you have already defined)
        const request = command.request;
        
        // Get the parameters from the request (in this case the filters)
        const relation= request.relation;

        // Call the function to get the data from the DB (need to pass in the list of filters to determine query to make)
        const updateRelationDoc = await this.repository.updateRelation(relation);

        const responseData: Status = updateRelationDoc;

        const response : IUpdateRelationResponse = {"status" : responseData};
        
        return response;
    }
}