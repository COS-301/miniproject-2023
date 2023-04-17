import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FilterList, TimeModification, UserTimeModification } from '@mp/api/feed/util';
import { Discipline } from '@mp/api/feed/util';
import { IUser } from '@mp/api/users/util';
import { Status } from '@mp/api/feed/util';

@Injectable()
export class FeedRepository {

    async fetchPosts(filters : FilterList){
        
        // This is some mock data - will actually need to query the database
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
        
        return toReturn;
    }


    async addTime(timeMode : TimeModification){
        // Query the database to add the amount of time to the post

        return Status.SUCCESS
    }

    async modifyUserTime(timeModification : UserTimeModification){
        // Query the database to add/subtract the amount of time to the user

        return Status.SUCCESS
    }

    async getUserTime(user : IUser){
        // Query the database to return the amount of time the user has left

        return {"timeRemaing":true, "value":1000};
    }



//   async findOne(profile: IProfile) {
//     return await admin
//       .firestore()
//       .collection('profiles')
//       .withConverter<IProfile>({
//         fromFirestore: (snapshot) => {
//           return snapshot.data() as IProfile;
//         },
//         toFirestore: (it: IProfile) => it,
//       })
//       .doc(profile.userId)
//       .get();
//   }

//   async createProfile(profile: IProfile) {
//     // Remove password field if present
//     delete profile.accountDetails?.password;
//     return await admin
//       .firestore()
//       .collection('profiles')
//       .doc(profile.userId)
//       .create(profile);
//   }

//   async updateProfile(profile: IProfile) {
//     // Remove password field if present
//     delete profile.accountDetails?.password;
//     return await admin
//       .firestore()
//       .collection('profiles')
//       .doc(profile.userId)
//       .set(profile, { merge: true });
//   }
}