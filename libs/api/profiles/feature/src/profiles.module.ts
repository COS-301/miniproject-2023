import { ProfilesModule as ProfilesDataAccessModule } from '@mp/api/profiles/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CreateProfileHandler,
  UpdateAccountDetailsHandler,
  UpdateProfileStatusHandler
} from './commands';
import {
  AccountDetailsUpdatedHandler,
  ProfileCreatedHandler,
  ProfileStatusUpdatedHandler
} from './events';
import { ProfilesSagas } from './profiles.sagas';
import { ProfilesService } from './profiles.service';
export const CommandHandlers = [
  CreateProfileHandler,
  UpdateAccountDetailsHandler,
  UpdateProfileStatusHandler,
];
export const EventHandlers = [
  ProfileCreatedHandler,
  AccountDetailsUpdatedHandler,
  ProfileStatusUpdatedHandler,
];

@Module({
  imports: [CqrsModule, ProfilesDataAccessModule],
  providers: [
    ProfilesService,
    ...CommandHandlers,
    ...EventHandlers,
    ProfilesSagas,
  ],
  exports: [ProfilesService],
})
export class ProfilesModule { }
