import {
  CreatePostCommand,
} from '@mp/api/post/util';
import {PostCreatedEvent} from "@mp/api/postss/util";
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import {UserCreatedEvent} from "@mp/api/users/util";

@Injectable()
export class PostSagas {
  @Saga()
  onPostCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map(
        (event: UserCreatedEvent) => new CreatePostCommand({post: event.post})
      )
    );
  };
}
  /*
  Example
  @Saga()
  onAccountDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(AccountDetailsUpdatedEvent),
      map(
        (event: AccountDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({ profile: event.profile })
      )
    );
  };
  */
