import {
    //events and commands
} from '@mp/api/post/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProfilesSagas {
 

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
}
