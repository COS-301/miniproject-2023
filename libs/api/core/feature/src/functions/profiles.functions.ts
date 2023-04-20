import { ProfilesService } from '@mp/api/profiles/feature';
import {
    IUpdateAccountDetailsRequest,
    IUpdateAccountDetailsResponse,
    IUpdateAddressDetailsRequest,
    IUpdateAddressDetailsResponse,
    IUpdateContactDetailsRequest,
    IUpdateContactDetailsResponse,
    IUpdateOccupationDetailsRequest,
    IUpdateOccupationDetailsResponse,
    IUpdatePersonalDetailsRequest,
    IUpdatePersonalDetailsResponse,
    ICreatePostRequest,
    ICreatePostResponse,
    IAddPostRequest,
    IAddPostResponse,
    IPostDetails,
    ICommentOnPostRequest,
    ICommentOnPostResponse,
    IProfile,
    IComment
} from '@mp/api/profiles/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';
import * as admin from 'firebase-admin';
export const updateAccountDetails = functions.https.onCall(
  async (
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateAccountDetails(request);
  }
);


exports.getUserPosts = functions.https.onCall(async (data, context) => {
  const userId = data.userId;

  if (!userId) {
    throw new functions.https.HttpsError('invalid-argument', 'User ID is required');
  }

    const querySnapshot = await admin.firestore().collection(`profiles/${userId}/posts`).get();
    const posts: { id: string; }[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
console.log(posts);
    return { posts };

});

exports.getUserPostsByEmail = functions.https.onCall(async (data, context) => {
  const userId = data.displayName;
console.log(userId + "functions");
  const profilesRef = admin.firestore().collection('profiles').where("accountDetails.displayName", "==", userId);
  const profileDocs = await profilesRef.get();
  const posts: { id: string; }[] = [];

  for (const profileDoc of profileDocs.docs) {
    const userIdP = profileDoc.id;
    const userPostsRef = admin.firestore().collection(`profiles/${userIdP}/posts`);
    const userPostsSnapshot = await userPostsRef.get();

    userPostsSnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
  }
return{posts};

});

exports.getUserPostsByHashtag = functions.https.onCall(async (data, context) => {
  const hashtag = data.hashtag;

  if (!hashtag) {
    throw new functions.https.HttpsError('invalid-argument', 'Hashtag is required');
  }
  // const userId = data.displayName;
  // console.log(userId + "functions");
  const profilesRef = admin.firestore().collection('profiles');
  const profileDocs = await profilesRef.get();
  const posts: { id: string; }[] = [];

  for (const profileDoc of profileDocs.docs) {
    const userId2 = profileDoc.id;
    // console.log("hashtag is " + hashtag + " and userId is " + userId2 + "");
    const userPostsRef = admin.firestore().collection(`profiles/${userId2}/posts`).where("hashtag", "==", hashtag);
    const userPostsSnapshot = await userPostsRef.get();

    userPostsSnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
  }

  return { posts };
});

exports.getAllPosts = functions.https.onCall(async (data, context) => {
  const profilesRef = admin.firestore().collection('profiles');
  const profileDocs = await profilesRef.get();
console.log("here in functions");

const posts: { id: string; }[] = [];

  for (const profileDoc of profileDocs.docs) {
    const userId = profileDoc.id;
console.log(userId);
    if(userId != data.userId){
    const userPostsRef = admin.firestore().collection(`profiles/${userId}/posts`);
    const userPostsSnapshot = await userPostsRef.get();

    userPostsSnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
  }
  }
console.log(posts);
  return { posts };
});



export const createPostDetails = functions.https.onCall(
  async (
    request: ICreatePostRequest
  ): Promise<ICreatePostResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.createPostDetails(request);
  }
);

export const createNewComment = functions.https.onCall(async (data: IComment, context) => {
  console.log("Hello")
  try {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'You must be logged in to add a comment');
    }
    const { userId, postId, comment } = data;

    // First, fetch the profile data
    const profileDoc = await admin.firestore().collection('profiles').doc(userId).get();
    const profileData = profileDoc.data() as IProfile;

    // If profile doesn't exist, handle the error
    if (!profileData) {
      throw new functions.https.HttpsError('not-found', 'Profile not found');
    }

    // Add the post to the profile's posts array
    if (!postId) {
      throw new functions.https.HttpsError('invalid-argument', 'Post id not defined in comment');
    }

    const postRef = await admin.firestore().collection('profiles').doc(userId).collection('posts').doc(postId).get();
    const postDetails = postRef.data() as IPostDetails;

    if (!postDetails) {
      throw new functions.https.HttpsError('not-found', 'Post not found');
    }

    if (!postDetails.comments) {
      postDetails.comments = [];
    }

    const newComment: IComment = {
      userId: userId,
      postId: postId,
      comment: comment,
    }

    postDetails.comments.push(newComment);

    if (!profileData.posts) {
      profileData.posts = [];
      throw new functions.https.HttpsError('not-found', 'There are no posts');
    }

    const index = profileData.posts.findIndex((post) => post.postID === postDetails.postID);
    if (index !== -1) {
      profileData.posts.splice(index, 1, postDetails);
      await admin.firestore().collection('profiles').doc(userId).set(profileData, { merge: true });
    }

    return newComment;
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError('internal', 'Error adding comment');
  }
});


export const updateAddressDetails = functions.https.onCall(
  async (
    request: IUpdateAddressDetailsRequest
  ): Promise<IUpdateAddressDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateAddressDetails(request);
  }
);

export const updateContactDetails = functions.https.onCall(
  async (
    request: IUpdateContactDetailsRequest
  ): Promise<IUpdateContactDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateContactDetails(request);
  }
);

export const updatePersonalDetails = functions.https.onCall(
  async (
    request: IUpdatePersonalDetailsRequest
  ): Promise<IUpdatePersonalDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updatePersonalDetails(request);
  }
);

export const updateOccupationDetails = functions.https.onCall(
  async (
    request: IUpdateOccupationDetailsRequest
  ): Promise<IUpdateOccupationDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateOccupationDetails(request);
  }
);

export const addPost = functions.https.onCall(
  async(
    request: IAddPostRequest
    ): Promise<IAddPostResponse> => {
    console.log("profiles.functions addPost ");
    const app = await NestFactory.createApplicationContext(CoreModule);
    console.log('here1');
    const service = app.get(ProfilesService);
    return service.addPost(request);
  }
);
