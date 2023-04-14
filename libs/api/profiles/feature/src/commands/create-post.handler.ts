import { ProfilesRepository } from '@mp/api/profiles/data-access';
import {
    ICreatePostResponse,
    CreatePostCommand
} from '@mp/api/profiles/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Profile } from '../models';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler
  implements
    ICommandHandler<CreatePostCommand, ICreatePostResponse>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: ProfilesRepository
  ) {}

  async execute(command: CreatePostCommand) {
    console.log(`${CreatePostHandler.name}`);

    const request = command.request;
    const profileDoc = await this.repository.findOne(request.profile);
    const profileData = profileDoc.data();

    if (!profileData) throw new Error('Profile not found');

    const profile = this.publisher.mergeObjectContext(
      Profile.fromData(profileData)
    );

    if (!request.profile.postDetails)
      throw new Error('Profile post details not found');
    profile.createPostDetails(request.profile.postDetails);
    profile.commit();

    const response: ICreatePostResponse = { profile };
    return response;
  }
}