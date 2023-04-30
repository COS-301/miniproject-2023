import { ProfilesRepository } from '@mp/api/profiles/data-access';
import {
    IAddPostResponse,
    AddPostCommand
} from '@mp/api/profiles/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Profile } from '../models';

@CommandHandler(AddPostCommand)
export class AddPostHandler
  implements
    ICommandHandler<AddPostCommand, IAddPostResponse>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: ProfilesRepository
  ) {}

  async execute(command: AddPostCommand) {
    const profile = await this.repository.addPost(
      command.request.profile,
      command.request.post
    );
    const response: IAddPostResponse = { profile };
    return response;
  }
}