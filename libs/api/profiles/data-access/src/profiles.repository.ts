import { IProfile, IPostDetails, IComment } from '@mp/api/profiles/util';
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

  async addPost(profile: IProfile, post: IPostDetails) {
    //First, fetch the profile data
    const profileDoc = await admin
      .firestore()
      .collection('profiles')
      .doc(profile.userId)
      .get()

      console.log("User id ",profile.userId)

    const profileData = profileDoc.data() as IProfile;


    // If profile doesn't exist, handle the error
    if (!profileData) {
      throw new Error('Profile not found');
    }

    
    const postID = post.postID ? post.postID : '';
    // Add the post to the profile's posts array
    const postRef = await admin
    .firestore()
    .collection('profiles')
    .doc(profile.userId)
    .collection('posts')
    .doc(postID)
    .set(post);

  
    // Update the profile's posts array
    if (!profileData.posts) {
      profileData.posts = [];
    }
    profileData.posts.push(post);
    this.updateProfile(profileData);
    
    return profileData;
  }

  // async createComment(userId: string, comment: IComment) {
  //   alert('TESTING$$$$')
  //   //First, fetch the profile data
  //   const profileDoc = await admin
  //     .firestore()
  //     .collection('profiles')
  //     .doc(profile.userId)
  //     .get();

  //   const profileData = profileDoc.data() as IProfile;

  //   // If profile doesn't exist, handle the error
  //   if (!profileData) {
  //     throw new Error('Profile not found');
  //   }

  //   // Add the post to the profile's posts array

  //   if(!comment.postId) {
  //     throw new Error('Post id not defined in comment');
  //   }

  //   const postRef = await admin
  //   .firestore()
  //   .collection('profiles')
  //   .doc(profile.userId)
  //   .collection('posts')
  //   .doc(comment.postId)
  //   .get();

  //   const postDetails = postRef.data() as IPostDetails;


  //   if(!postDetails) {
  //     return new Error('Such a comment does not a exist')
  //   }

  //   if(!postDetails.comments) {
  //     postDetails.comments = [];
  //   }

  //   postDetails.comments.push(comment)
 

  //   // Update the profile's posts array
  //   if (!profileData.posts) {
  //     profileData.posts = [];
  //     return new Error('There are no posts')
  //   }

  //   const index = profileData.posts.findIndex((post) => post.postID === postDetails.postID);
  //   if (index !== -1) {
  //     profileData.posts.splice(index, 1, postDetails);
  //   }

    
  //   return profileData;

  // }

}
