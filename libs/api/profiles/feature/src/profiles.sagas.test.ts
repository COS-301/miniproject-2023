import { of } from 'rxjs';
import { ProfilesSagas } from './profiles.sagas';
import {  AccountDetailsUpdatedEvent, PostCreatedEvent, PostAddedEvent } from '@mp/api/profiles/util';
import { UpdateProfileStatusCommand } from '@mp/api/profiles/util';

describe('ProfilesSagas', () => {
  let profilesSagas: ProfilesSagas;

  beforeEach(() => {
    profilesSagas = new ProfilesSagas();
  });

  it('should update profile status when account details are updated', async () => {
    const profile = { userId: 'testUserId',
    accountDetails: {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      photoURL: 'http://example.com/photo.jpg',
    }};
    const events$ = of(new AccountDetailsUpdatedEvent(profile));

    const command = await profilesSagas.onAccountDetailsUpdated(events$).toPromise();

    expect(command).toEqual(new UpdateProfileStatusCommand({ profile }));
  });

  it('should update profile status when a post is created', async () => {
    const profile = { userId: 'testUserId',
    accountDetails: {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      photoURL: 'http://example.com/photo.jpg',
    }};
    const events$ = of(new PostCreatedEvent(profile));

    const command = await profilesSagas.onPostCreated(events$).toPromise();

    expect(command).toEqual(new UpdateProfileStatusCommand({ profile }));
  });

  it('should update profile status when a post is added', async () => {
    const profile = { userId: 'testUserId',
    accountDetails: {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      photoURL: 'http://example.com/photo.jpg',
    }};
    const events$ = of(new PostAddedEvent(profile));

    const command = await profilesSagas.onPostAdded(events$).toPromise();

    expect(command).toEqual(new UpdateProfileStatusCommand({ profile }));
  });

  it('should update profile status when a comment is added', async () => {
    const profile = { userId: 'testUserId',
    accountDetails: {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      photoURL: 'http://example.com/photo.jpg',
    }};
    const events$ = of(new PostAddedEvent(profile));

    const command = await profilesSagas.onPostAdded(events$).toPromise();

    expect(command).toEqual(new UpdateProfileStatusCommand({ profile }));
  });
});
