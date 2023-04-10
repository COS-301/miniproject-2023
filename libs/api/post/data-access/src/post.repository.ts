import { IPost } from '@mp/api/postss/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PostRepository {



  async updatePost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.postID)
      .set(post, { merge: true });
  }

  // async findOne(post: IPost) {
  //   return await admin
  //     .firestore()
  //     .collection('posts')
  //     .withConverter<IPost>({
  //       fromFirestore: (snapshot) => {
  //         return snapshot.data() as IPost;
  //       },
  //       toFirestore: (it: IPost) => it,
  //     })
  //     .doc(profile.userId)
  //     .get();
  // }

  /*Examples from profile
  async createProfile(profile: IPost) {
    // Remove password field if present
    delete profile.accountDetails?.password;
    return await admin
      .firestore()
      .collection('profiles')
      .doc(profile.userId)
      .create(profile);
  }

  async updateProfile(profile: IPost) {
    // Remove password field if present
    delete profile.accountDetails?.password;
    return await admin
      .firestore()
      .collection('profiles')
      .doc(profile.userId)
      .set(profile, { merge: true });
  }
  */
}
