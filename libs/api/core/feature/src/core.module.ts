import { AuthModule } from '@mp/api/auth/feature';
import { EventstoreModule } from '@mp/api/eventstore/feature';
import { ProfilesModule } from '@mp/api/profiles/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import { PostModule } from '@mp/api/postss/feature';
import { UsersModule } from '@mp/api/users/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule, EventstoreModule, ProfilesModule, UsersModule],
})
export class CoreModule {}
