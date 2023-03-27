import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FilterList } from '@mp/api/feed/util';
import { Discipline } from '@mp/api/feed/util';

@Injectable()
export class FeedRepository {

    // async fetchPosts(filters : FilterList){
    async fetchPosts(){
        const toReturn = {
            success: 'true',
            data: [
                {
                    name: "post 1",
                    time: 500,
                    description: "This is a very orginal and cool post!",
                    discipline: Discipline.SCIENCE,
                    content: "Wow, I really am I a super cool story - pls spend time"
                },
                {
                name : "post 2",
                time : 10000,
                description : "This is a really cool post!",
                discipline: Discipline.MUSIC,
                content : "Wow, I really am I a super cool story - pls spend time" 
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