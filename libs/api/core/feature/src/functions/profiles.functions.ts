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

import cors from 'cors';
const corsHandler = cors({origin: 'https://cos301-mp-grp3.firebaseapp.com'});
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

export const buyPosts = functions.https.onCall(async (data, context) => {
  const buyerId = context.auth?.uid;
  const postName = data.postId;

  if (!buyerId || !postName) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with a buyerId and postName.'
    );
  }

  const lockRef = admin.firestore().collection('locks').doc(`${buyerId}_${postName}`);

  const lockSnapshot = await lockRef.get();
  if (lockSnapshot.exists) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Another buyPosts operation is already in progress for this buyer and post.'
    );
  }

  // Create a lock document
  await lockRef.set({ locked: true });

  try {

  const profilesRef = admin.firestore().collection('profiles');
  let postRef;

  const profilesSnapshot = await profilesRef.get();
  for (const profileDoc of profilesSnapshot.docs) {
    const profileId = profileDoc.id;
    const postsRef = admin
      .firestore()
      .collection('profiles')
      .doc(profileId)
      .collection('posts');

    const postsSnapshot = await postsRef.where('postID', '==', postName).get();
    for (const postDoc of postsSnapshot.docs) {
      postRef = postDoc.ref;
      break;
    }
    if (postRef) {
      break;
    }
  }

  if (!postRef) {
    throw new functions.https.HttpsError(
      'not-found',
      'The specified post does not exist.'
    );
  }

  const postSnapshot = await postRef.get();
if(!postSnapshot.data()){
  throw new functions.https.HttpsError(
    'not-found',
    'The specified post does not exist.'
  );
}
  const post = postSnapshot.data();
if(!post){
  throw new functions.https.HttpsError(
    'not-found',
    'The specified post does not exist.'
  );
}
  if (post['ownedBy'] === buyerId) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Already own this post'
    );
  }

  const oldOwnerRef = admin
    .firestore()
    .collection('profiles')
    .doc(post['ownedBy']);
  const newOwnerRef = admin.firestore().collection('profiles').doc(buyerId);

  const oldOwnerSnapshot = await oldOwnerRef.get();
  const newOwnerSnapshot = await newOwnerRef.get();

  if (!oldOwnerSnapshot.exists || !newOwnerSnapshot.exists) {
    throw new functions.https.HttpsError(
      'not-found',
      'One or both of the specified users do not exist.'
    );
  }

  const oldOwnerData = oldOwnerSnapshot.data();
  const newOwnerData = newOwnerSnapshot.data();

  const batch = admin.firestore().batch();

  // Transfer ownership
  batch.update(postRef, { ownedBy: buyerId });
  // Update old owner's time
// Update old owner's time
if (oldOwnerData && post['listing'] !== null && typeof post['listing'] === 'number') {
  const updatedOldOwnerTime = oldOwnerData['time'] + post['listing'];
  batch.update(oldOwnerRef, { time: updatedOldOwnerTime });
}

// Update new owner's time
if (newOwnerData && post['listing'] !== null && typeof post['listing'] === 'number') {
  const updatedNewOwnerTime = newOwnerData['time'] - post['listing'];
  batch.update(newOwnerRef, { time: updatedNewOwnerTime });
}
await batch.commit();
  }catch (error) {
    // Delete the lock document in case of any error
    await lockRef.delete();
    throw error;
  }
  // Delete the lock document after successful completion
  await lockRef.delete();
  return { message: 'Post successfully bought.' };
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

export const createNewComment1 = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
  console.log("Hello")

  try {
const data=request.body;
    const { userId, postId, comment } = data.comment;
    const createrId= data.userId;
    if (typeof createrId !== 'string' || createrId.trim() === '') {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid user ID');
    }

    const profileRef = admin.firestore().collection('profiles').doc(createrId);

    const profileDoc = await profileRef.get();
    console.log(profileDoc);
    if (!profileDoc) {
      throw new functions.https.HttpsError('not-found', 'profileref');
    }

    const profileData = profileDoc.data() as IProfile;

    if (!profileData) {
      throw new functions.https.HttpsError('not-found', 'Profile not found');
    }else if(profileData["time"]!=null){
console.log("here " + profileData["time"]);
      const newTime =profileData["time"]+2;
      profileRef.update({time : newTime});
    }
    const commenterId=data.comment.userId;
console.log(commenterId);
    if (typeof commenterId !== 'string' || commenterId.trim() === '') {
      throw new functions.https.HttpsError('invalid-argument', 'Invalid user ID');
    }
    const profileRef1 = admin.firestore().collection('profiles').where("accountDetails.displayName", "==", userId);

    const profileDoc1 = await profileRef1.get();

    if (!profileDoc1) {
      throw new functions.https.HttpsError('not-found', 'profileref');
    }
    for (const profileDoc of profileDoc1.docs) {
      const userIdP = profileDoc.id;
      const userPostsRef = admin.firestore().collection('profiles').doc(userIdP);
      const userPostsSnapshot = await userPostsRef.get();
      const profileData1=userPostsSnapshot.data();
      if (!profileData1) {
        throw new functions.https.HttpsError('not-found', 'Profile not found');
      }else if(profileData1["time"]!=null){
        const newTime =profileData1["time"]-2;
        userPostsRef.update({time : newTime});
      }
    }


    if (!postId) {
      throw new functions.https.HttpsError('invalid-argument', 'Post id not defined in comment');
    }

    const postRef = profileRef.collection('posts').doc(postId);
const postDoc = await postRef.get();

if (!postDoc.exists) {
  throw new functions.https.HttpsError('not-found', 'Post not found');
}



  const postDetails = postDoc.data() as IPostDetails;

  if (!postDetails.comments) {
    postDetails.comments = [];
    console.log("Comment array is empty")
  }

  const newComment: IComment = {
    userId: userId,
    postId: postId,
    comment: comment,
  }

  postDetails.comments.push(newComment);

  postRef.update({comments : postDetails.comments});

  if (!profileData.posts || profileData.posts.length === 0) {
    throw new functions.https.HttpsError('not-found', 'There are no posts');
  }

  const index = profileData.posts.findIndex((post) => post.postID === postDetails.postID);
  if (index !== -1) {
    console.log("Post found: index: ", index)

    profileData.posts.splice(index, 1, postDetails);
    await profileRef.update({ posts: profileData.posts });
  }
  else {
    console.log("Post NOT found: index: ", index)
  }

      return newComment;
    } catch (error) {
      console.error(error);
      throw new functions.https.HttpsError('internal', 'Error adding comment');
    }
  });
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

// exports.getUserPortfolio = functions.https.onCall(async (data, context) => {
//   const userId = data.userId;
// console.log(userId + "functions");
//   const postsRef = admin.firestore().collectionGroup('posts').where("ownedBy", "==", userId);
//   const postsDocs = await postsRef.get();
//   const posts: { id: string; }[] = [];

//   postsDocs.forEach((doc) => {
//     posts.push({ id: doc.id, ...doc.data() });
//   });
// return{posts};

// });

exports.getUserPortfolio = functions.https.onCall(async (data, context) => {
  const userId1 = data.userId;
  const profilesRef = admin.firestore().collection('profiles');
  const profileDocs = await profilesRef.get();
console.log("here in functions");

const posts: { id: string; }[] = [];

  for (const profileDoc of profileDocs.docs) {
    const userId = profileDoc.id;
    const userPostsRef = admin.firestore().collection(`profiles/${userId}/posts`).where("ownedBy","==",userId1);
    const userPostsSnapshot = await userPostsRef.get();

    userPostsSnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
  }
console.log(posts);
  return { posts };
});

export const likePost = functions.https.onCall(async (data, context) => {
  const likerId = context.auth?.uid;
  const postName = data.postId;

  if (!likerId || !postName) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with a likerId and postName.'
    );
  }

  const lockRef = admin.firestore().collection('locks').doc(`${likerId}_${postName}`);

  const lockSnapshot = await lockRef.get();
  if (lockSnapshot.exists) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Another buyPosts operation is already in progress for this buyer and post.'
    );
  }

  // Create a lock document
  await lockRef.set({ locked: true });

  try {

  const profilesRef = admin.firestore().collection('profiles');
  let postRef;

  const profilesSnapshot = await profilesRef.get();
  for (const profileDoc of profilesSnapshot.docs) {
    const profileId = profileDoc.id;
    const postsRef = admin
      .firestore()
      .collection('profiles')
      .doc(profileId)
      .collection('posts');

    const postsSnapshot = await postsRef.where('postID', '==', postName).get();
    for (const postDoc of postsSnapshot.docs) {
      postRef = postDoc.ref;
      break;
    }
    if (postRef) {
      break;
    }
  }

  if (!postRef) {
    throw new functions.https.HttpsError(
      'not-found',
      'The specified post does not exist.'
    );
  }

  const postSnapshot = await postRef.get();
if(!postSnapshot.data()){
  throw new functions.https.HttpsError(
    'not-found',
    'The specified post does not exist.'
  );
}
  const post = postSnapshot.data();
if(!post){
  throw new functions.https.HttpsError(
    'not-found',
    'The specified post does not exist.'
  );
}


  const ownerRef = admin
    .firestore()
    .collection('profiles')
    .doc(post['ownedBy']);
  const likerRef = admin.firestore().collection('profiles').doc(likerId);

  const ownerSnapshot = await ownerRef.get();
  const likerSnapshot = await likerRef.get();

  if (!ownerSnapshot.exists || !likerSnapshot.exists) {
    throw new functions.https.HttpsError(
      'not-found',
      'One or both of the specified users do not exist.'
    );
  }

  const ownerData = ownerSnapshot.data();
  const likerData = likerSnapshot.data();

  const batch = admin.firestore().batch();

  // Add like to post
  batch.update(postRef, { likes: post['likes']+1 });
// Update owner's time
if (ownerData) {
  const updatedOldOwnerTime = ownerData['time'] + 1;
  batch.update(ownerRef, { time: updatedOldOwnerTime });
}

// Update liker'stime
if (likerData) {
  const updatedLikerTime = likerData['time'] - 1;
  batch.update(likerRef, { time: updatedLikerTime });
}
await batch.commit();
  }catch (error) {
    // Delete the lock document in case of any error
    await lockRef.delete();
    throw error;
  }
  // Delete the lock document after successful completion
  await lockRef.delete();
  return { message: 'Post successfully liked.' };
});
