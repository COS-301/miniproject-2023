import { IUser } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class UsersRepository {
  async createUser(user: IUser) {
    return await admin
      .firestore()
      .collection('users')
      .doc(user.id)
      .create(user);
  }

  async doesUserExist(user: IUser):Promise<boolean> {
    const potentialUser = await admin
      .firestore()
      .collection("users")
      .where(admin.firestore.FieldPath.documentId(),"==", user.id).get();
    return !potentialUser.empty
  }
}
