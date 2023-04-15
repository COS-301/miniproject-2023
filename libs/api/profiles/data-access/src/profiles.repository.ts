import { IProfile, IPostDetails } from '@mp/api/profiles/util';
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
      .get();

    const profileData = profileDoc.data() as IProfile;

    // If profile doesn't exist, handle the error
    if (!profileData) {
      throw new Error('Profile not found');
    }

    // Add the post to the profile's posts array
    const postRef = await admin
    .firestore()
    .collection('profiles')
    .doc(profile.userId)
    .collection('posts')
    .add(post);

    // Get the generated post ID and add it to the post object
    post.postID = postRef.id;

    // Update the profile's posts array
    if (!profileData.posts) {
      profileData.posts = [];
    }
    profileData.posts.push(post);

    return profileData;
  }

}
