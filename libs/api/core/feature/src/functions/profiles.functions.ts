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
    IPostDetails
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

exports.buyPost = functions.https.onCall(async (data, context) => {
  const post = data.post;
  const buyer = data.buyer;
  const seller = data.post.ownedBy;


  if (!post || !buyer || !seller) {
    throw new functions.https.HttpsError('invalid-argument', 'Post, buyer, and seller are required');
  }

  const listingPrice = post.listing;
  if (buyer.time < listingPrice) {
    throw new functions.https.HttpsError('failed-precondition', 'Buyer does not have enough time to buy the post');
  }

  // Start a batch for atomic updates
  const batch = admin.firestore().batch();

  // Update buyer's time
  const buyerRef = admin.firestore().doc(`profiles/${buyer}`);
  const buyerDocs = await buyerRef.get();

  batch.update(buyerRef, { time: buyerDocs.data()?.['time'] - listingPrice });

  // Update seller's time
  const sellerRef = admin.firestore().doc(`profiles/${seller}`);
  const sellerDocs = await sellerRef.get();
  batch.update(sellerRef, { time: sellerDocs.data()?.['time'] + listingPrice });

  // Copy post to buyer's collection and update ownerId and ownerGainedTime
  const postData = { ...post, ownerId: buyer, ownerGainedTime: 0 };
  const buyerPostsRef = admin.firestore().collection(`profiles/${buyer}/posts`);
  batch.set(buyerPostsRef.doc(post.id), postData);

  // Commit the batch
  await batch.commit();

  // Update ownerId for all occurrences of the post with the given postName
  const postName = post.postID;
  const allPostsSnapshot = await admin.firestore().collectionGroup('posts').where('postID', '==', postName).get();

  allPostsSnapshot.forEach((doc) => {
    doc.ref.update({ ownerId: buyer });
  });

  const querySnapshot = await admin.firestore().collection(`profiles/${buyer}/posts`).get();
    const posts: { id: string; }[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
console.log(posts);
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
