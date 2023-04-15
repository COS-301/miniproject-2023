import { IProfile } from '@mp/api/profiles/util';
import { IMemory, IComment } from '@mp/api/memories/util';
import { IUser } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class ProfilesRepository {
  async findOne(profile: IProfile) {
    return await admin
      .firestore()
      .collection('profiles')
      .withConverter<IProfile>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IProfile;
        },
        toFirestore: (it: IProfile) => it,
      })
      .doc()
      .get();
  }

  async createProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.accountDetails?.password;
    return await admin.firestore().collection('profiles').doc().create(profile);
  }

  async updateProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.accountDetails?.password;
    return await admin.firestore().collection('profiles').doc().set(profile, { merge: true });
  }

  async getProfileDetails(profile: IUser) {
    return await admin
      .firestore()
      .collection('users')
      .doc(profile.userId)
      .withConverter<IUser>({
        fromFirestore: (snapshot) => {
          const userDetails = snapshot.data() as IUser;
          userDetails.userId = ''; //for security reasons
          return userDetails;
        },
        toFirestore: (it: IUser) => it,
      })
      .get();
  }

  async getProfileMemories(profile: IProfile): Promise<IMemory[]> {
    const MemorySnapshots = await admin
      .firestore()
      .collection('memories')
      .where('userId', '==', profile.userId)
      .where('alive', '==', true)
      .orderBy('created')
      .get();

    const memories: IMemory[] = [];

    MemorySnapshots.forEach((doc) => {
      //console.log(doc.data());

      //console.log("Comment Here: "+doc.data()["comments"]);

      const CommentsSnapshots = admin
        .firestore()
        .collection(`memories/${doc.id}/comments`)
        .get()
        .then((snapshot) => {
          const CurrentComments: IComment[] = [];
          snapshot.forEach((i) => {
            const comment = i.data() as IComment;
            CurrentComments.push(comment);
          });
          return CurrentComments;
        })
        .then((item) => {
          doc.data().comments = item;
          console.log(doc.data().comments);
        });

      //console.log(CurrentComments);
      //console.log(CurrentComments);
      /*
        const memory = doc.data() as IMemory;
        

        memory.comments.forEach((item)=>{

        })

        memory.userId = "";
        */
      memories.push(doc.data());
    });

    return memories;
  }
}
