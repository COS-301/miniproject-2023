import {
    AccountDetailsUpdatedEvent,
    //AddressDetailsUpdatedEvent,
    //ContactDetailsUpdatedEvent,
    PostCreatedEvent,
    CreatePostCommand,
    AddPostCommand,
    CreateProfileCommand,
    //OccupationDetailsUpdatedEvent,
    //PersonalDetailsUpdatedEvent,
    UpdateProfileStatusCommand,
    PostAddedEvent
} from '@mp/api/profiles/util';
import { UserCreatedEvent } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProfilesSagas {
  @Saga()
  onUserCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map(
        (event: UserCreatedEvent) =>
          new CreateProfileCommand({user: event.user})
      )
    );
  };

  @Saga()
  onAccountDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(AccountDetailsUpdatedEvent),
      map(
        (event: AccountDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({profile: event.profile})
      )
    );
  };

  @Saga()
  onPostCreated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(PostCreatedEvent),
      map(
        (event: PostCreatedEvent) =>
          new UpdateProfileStatusCommand({profile: event.profile})
      )
    );
  };

  /*@Saga()
  onAddressDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(AddressDetailsUpdatedEvent),
      map(
        (event: AddressDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({ profile: event.profile })
      )
    );
  };*/

 /* @Saga()
  onContactDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(ContactDetailsUpdatedEvent),
      map(
        (event: ContactDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({profile: event.profile})
      )
    );
  };*/

  /*@Saga()
  onPersonalDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(PersonalDetailsUpdatedEvent),
      map(
        (event: PersonalDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({profile: event.profile})
      )
    );
  };*/

  /*@Saga()
  onOccupationDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(OccupationDetailsUpdatedEvent),
      map(
        (event: OccupationDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({profile: event.profile})
      )
    );
  };*/


@Saga()
onPostAdded = (
  events$: Observable<any>
): Observable<ICommand> => {
  return events$.pipe(
    ofType(PostAddedEvent),
    map(
      (event: PostAddedEvent) =>
        new UpdateProfileStatusCommand({ profile: event.profile })
    )
  );
};

@Saga()
onCommentCreated = (
  events$: Observable<any>
): Observable<ICommand> => {
  return events$.pipe(
    ofType(PostAddedEvent),
    map(
      (event: PostAddedEvent) =>
        new UpdateProfileStatusCommand({ profile: event.profile })
    )
  );
};
}
