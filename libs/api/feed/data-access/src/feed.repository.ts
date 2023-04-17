import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FilterList, FilterType, TimeModification } from '@mp/api/feed/util';
import { Discipline } from '@mp/api/feed/util';
import { IUser } from '@mp/api/users/util';
import { Status } from '@mp/api/feed/util';

@Injectable()
export class FeedRepository {

    interpretDiscipline(disciplineStr : string){
      if (disciplineStr.toLowerCase() == "art"){
        return Discipline.ART;
      } else if (disciplineStr.toLowerCase() == "food"){
        return Discipline.FOOD;
      } else if (disciplineStr.toLowerCase() == "gaming"){
        return Discipline.GAMING;
      } else if (disciplineStr.toLowerCase() == "sport"){
        return Discipline.SPORT;
      } else if (disciplineStr.toLowerCase() == "science"){
        return Discipline.SCIENCE;
      } else if (disciplineStr.toLowerCase() == "news"){
        return Discipline.NEWS;
      } else if (disciplineStr.toLowerCase() == "travel"){
        return Discipline.TRAVEL;
      } else {
        return Discipline.MUSIC;
      }
      
    }


    async fetchPosts(filters : FilterList){
        

      let discipline = "";
      if (filters.list?.includes(FilterType.ART_FILTER)){
        discipline = Discipline.ART;
      } else if (filters.list?.includes(FilterType.FOOD_FILTER)){
        discipline = Discipline.FOOD;
      } else if (filters.list?.includes(FilterType.GAMING_FILTER)){
        discipline = Discipline.GAMING;
      } else if (filters.list?.includes(FilterType.SPORT_FILTER)){
        discipline = Discipline.SPORT;
      } else if (filters.list?.includes(FilterType.SCIENCE_FILTER)){
        discipline = Discipline.SCIENCE;
      } else if (filters.list?.includes(FilterType.NEWS_FILTER)){
        discipline = Discipline.NEWS;
      } else if (filters.list?.includes(FilterType.TRAVEL_FILTER)){
        discipline = Discipline.TRAVEL;
      } else if (filters.list?.includes(FilterType.MUSIC_FILTER)){
        discipline = Discipline.MUSIC;
      } 

      let documents;
      if (filters.list?.includes(FilterType.MOST_RECENT)){
         
        if (discipline.length != 0){
          documents = await admin.firestore()
        .collection("Posts")
        .where("discipline", "==", discipline)
        .orderBy("createdTimestamp", "desc")
        .get();
        } else {
          documents = await admin.firestore()
        .collection("Posts")
        .orderBy("createdTimestamp", "desc")
        .get();
        }

      }
      else if (filters.list?.includes(FilterType.MOST_POPULAR)){
           if (discipline.length != 0){
          documents = await admin.firestore()
        .collection("Posts")
        .where("discipline", "==", discipline)
        .orderBy("timeWatched", "desc")
        .get();
        } else {
          documents = await admin.firestore()
        .collection("Posts")
        .orderBy("timeWatched", "desc")
        .get();
        }
      } else {
        if (discipline.length != 0){
          documents = await admin.firestore()
        .collection("Posts")
        .where("discipline", "==", discipline)
        .get();
        } else {
          documents = await admin.firestore()
        .collection("Posts")
        .get();
        }
      }
      
      
        
        console.log(`Documents retrieved: ${documents}`);

        const toReturn: { id: string; title: string; author: null; description: string; content: string; time: number; discipline: Discipline; }[] = [];

        documents.forEach((doc) => {
          const currentDoc = doc.data();
          const currentDocPostData = currentDoc['postDetails'];
          toReturn.push({
            id: currentDoc['id'],
            title: currentDoc['title'],
            author: null,  // TODO: Create function to interpret ```currentDoc['author']``` 's userId value and fetch the appropriate user details
            description: currentDocPostData['desc'],
            content: currentDocPostData['content'],
            time: currentDocPostData['timeWatched'],
            discipline: this.interpretDiscipline(currentDocPostData['discipline']),   // TODO - done: Create function to interpret ```currentDocPostData['discipline']``` 's value
          });
        });

        // This is some mock data - will actually need to query the database
        // const toReturn = {
        //     data: [
        //         {
        //             id: "post 1",
        //             title: "Burger King Foot Lettuce",
        //             author: null,
        //             description: "This is a very orginal and cool post!",
        //             content: "Wow, I really am I a super cool story - pls spend time",
        //             discipline: Discipline.SCIENCE,
        //             time: 500
        //         },
        //         {
        //             id: "post 1",
        //             title: "Burger King Foot Lettuce",
        //             author: null,
        //             description: "This is a very orginal and cool post!",
        //             content: "Wow, I really am I a super cool story - pls spend time",
        //             discipline: Discipline.SCIENCE,
        //             time: 500
        //         }
        //     ]
        // };

        return {data: toReturn};
    }


    async addTime(timeMode : TimeModification){
        // Query the database to add the amount of time to the user

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
