import { Test } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { ProfilesService } from './profiles.service';
import { IAddPostRequest, ICommentOnPostRequest, IUpdateAccountDetailsRequest } from '@mp/api/profiles/util';
import { AddPostCommand, CreateNewCommentCommand, UpdateAccountDetailsCommand } from '@mp/api/profiles/util';
import { UpdateAccountDetails } from '@mp/app/profile/util';

describe('ProfilesService', () => {
  let profilesService: ProfilesService;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ProfilesService,
        { provide: CommandBus, useValue: { execute: jest.fn() } },
      ],
    }).compile();

    profilesService = moduleRef.get<ProfilesService>(ProfilesService);
    commandBus = moduleRef.get<CommandBus>(CommandBus);
  });

  it('should add a post', async () => {
    const request: IAddPostRequest = {
      profile: { userId: 'testUserId',
      accountDetails: {
        displayName: 'John Doe',
        email: 'john.doe@example.com',
        photoURL: 'http://example.com/photo.jpg',
      }},
      post: { postID: 'testPostId', content: 'Test post' },
    };

    await profilesService.addPost(request);

    expect(commandBus.execute).toHaveBeenCalledWith(new AddPostCommand(request));
  });

  it('should create a new comment', async () => {
    const request: ICommentOnPostRequest = {
      userId: 'testUserId',
      comment: { comment: "hi" },
    };

    await profilesService.createNewComment(request);

    expect(commandBus.execute).toHaveBeenCalledWith(new CreateNewCommentCommand(request));
  });

  it('update account details', async () => {
    const request: IUpdateAccountDetailsRequest = {
       profile: { userId: 'testUserId',
        accountDetails: {
          displayName: 'John Doe',
          email: 'john.doe@example.com',
          photoURL: 'http://example.com/photo.jpg',
        }}
    };

    await profilesService.updateAccountDetails(request);

    expect(commandBus.execute).toHaveBeenCalledWith(new UpdateAccountDetailsCommand(request));
  });

});
