import { IPost } from '@mp/api/postss/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PostRepository {
  async findOne(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .withConverter<IPost>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IPost;
        },
        toFirestore: (it: IPost) => it,
      })
      .doc(post.postID)
      .get();
  }

  /*
  Returns posts created in the last week that has the greatest number of likes
  */
  async findTrendingByLikes(): Promise<IPost[]> {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const querySnapshot = await admin
      .firestore()
      .collection('posts')
      .where('createdAt', '>', admin.firestore.Timestamp.fromDate(oneWeekAgo))
      .orderBy('likes', 'desc')
      .limit(30)
      .withConverter<IPost>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IPost;
        },
        toFirestore: (it: IPost) => it,
      })
      .get();

    const topPosts: IPost[] = [];
    querySnapshot.forEach((doc) => {
      topPosts.push(doc.data());
    });

    return topPosts;
  }

  async createPost(post: IPost) {
    return await admin
      .firestore()
      .collection('post')
      .doc(post.postID)
      .create(post);
  }

  async updateLikes(post: IPost) {
    return await admin
      .firestore()
      .collection('post')
      .doc(post.postID)
      .update({post : { likes: admin.firestore.FieldValue.increment(1)}});
  }
  /*Examples from profile

  async createProfile(profile: IPost) {
    // Remove password field if present
    // delete profile.accountDetails?.password;
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.postID)
      .create(post);
  }

  /*
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
