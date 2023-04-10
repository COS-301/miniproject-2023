import { CreateAuthCommand, ICreateAuthRequest } from '@mp/api/auth/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserRecord } from 'firebase-admin/auth';
import {Auth, getAuth} from '@angular/fire/auth'

@Injectable()
export class AuthService {
  currentUser: any;
  constructor(private commandBus: CommandBus) {}

  onAuthCreate(user: UserRecord) {
    const request: ICreateAuthRequest = { userRecord: user };
    return this.commandBus.execute(new CreateAuthCommand(request));
  }

  getId(){
      const auth = getAuth();
      console.log(auth.currentUser);
      this.currentUser = auth.currentUser;
      return this.currentUser?.uid;
  }
}
