import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FilterList } from '@mp/api/feed/util';
import { Discipline } from '@mp/api/feed/util';

@Injectable()
export class FeedRepository {

    async fetchPosts(filters : FilterList){
        
        // This is some mock data - will actually need to query the database
        const toReturn = {
            // postsFound: 'true',
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