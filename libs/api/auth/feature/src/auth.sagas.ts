import { UpdateAuthCommand } from '@mp/api/auth/util';
import {
  AccountDetailsUpdatedEvent,
  ContactDetailsUpdatedEvent
} from '@mp/api/profiles/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthSagas {
  @Saga()
  onAccountDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(AccountDetailsUpdatedEvent),
      map(
        (event: AccountDetailsUpdatedEvent) =>
          new UpdateAuthCommand({
            auth: {
              id: event.profile.userId,
              userName: event.profile.accountDetails?.userName,
              email: event.profile.accountDetails?.email,
              photoURL: event.profile.accountDetails?.photoURL,
              password: event.profile.accountDetails?.password,
            },
          })
      )
    );
  };

}
