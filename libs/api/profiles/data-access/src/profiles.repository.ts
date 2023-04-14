import { IProfile, Post } from '@mp/api/profiles/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IRelationship } from '../../util/src/interfaces/relationship.interface';
import { Discipline } from '../../util/src/enums/discipline.enum';
import { IUser } from '@mp/api/users/util';

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
      .doc(profile.userId)
      .get();
  }

  async createProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.accountDetails?.password;
    return await admin
      .firestore()
      .collection('profiles')
      .doc(profile.userId)
      .create(profile);
  }

  async updateProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.accountDetails?.password;
    return await admin
      .firestore()
      .collection('profiles')
      .doc(profile.userId)
      .set(profile, { merge: true });
  }

  async checkRelationship(relationship: IRelationship) {
    return {"exists": true, "type": "FRIEND"}
  }

  async fetchUserPosts(userProfile: IProfile) {
    

    const toReturn = {
      data: [
          {
              id: "post 1",
              title: "Burger King Foot Lettuce",
              author: null,
              description: "This is a very orginal and cool post!",
              content: "Wow, I really am I a super cool story - pls spend time",
              discipline: Discipline.SCIENCE,
              time: 500
          },
          {
              id: "post 1",
              title: "Burger King Foot Lettuce",
              author: null,
              description: "This is a very orginal and cool post!",
              content: "Wow, I really am I a super cool story - pls spend time",
              discipline: Discipline.SCIENCE,
              time: 500
          }
      ]
    };

    return {
      "postsFound": true, 
      // "list": toReturn.data
      "list": null
    }
  }
}
