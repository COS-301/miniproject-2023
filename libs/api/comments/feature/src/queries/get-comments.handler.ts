import { CommentsRepository } from '@mp/api/comments/data-access';
import { IGetCommentsResponse, GetCommentsQuery, IGetCommentsRequest } from '@mp/api/comments/util';
import { QueryHandler, EventPublisher, IQueryHandler } from '@nestjs/cqrs';
import { Comment } from '../models';

@QueryHandler(GetCommentsQuery)
export class GetCommentsHandler
  implements IQueryHandler<GetCommentsQuery, IGetCommentsResponse>
{
  constructor(private readonly publisher: EventPublisher, private readonly repository: CommentsRepository) {}

  async execute(query: GetCommentsQuery) {
    console.log(`${GetCommentsHandler.name}`);

    const request = query.request;
    const profileDoc = await this.repository.getComments(request.memory);
    const profileData = profileDoc.data();

    if (!profileData) throw new Error('Profile not found');

    const profile = this.publisher.mergeObjectContext(Profile.fromData(profileData));

    if (!request.profile.accountDetails) throw new Error('Profile account details not found');
    profile.updateAccountDetails(request.profile.accountDetails);
    profile.commit();

    const response: IUpdateAccountDetailsResponse = { profile };
    return response;
  }
}
