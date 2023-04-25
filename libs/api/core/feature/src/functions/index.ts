export * from './auth.functions';
export * from './profiles.functions';
export * from './posts.functions';
export * from './updateUserTime.functions';

import * as functions from 'firebase-functions';
import admin from'firebase-admin';

const decrementTime = async () => {
  const profilesRef = admin.firestore().collection('profiles'); // Replace 'profiles' with the name of your collection
  console.log("hey");
    const profilesSnapshot = await profilesRef.get();

    profilesSnapshot.forEach(async (profileDoc) => {
      const profileData = profileDoc.data();

      if (profileData['time'] > 0) {
        await profileDoc.ref.update({
          time: admin.firestore.FieldValue.increment(-1),
        });
      }
    });

    console.log('Time decremented for all profiles');
};
exports.decrementTimeScheduled = functions.pubsub.schedule('every 1 minutes').onRun(decrementTime);

exports.decrementTimeHttp = functions.https.onRequest(async (req, res) => {
  await decrementTime();
  res.status(200).send('Time decremented for all profiles');
});
// exports.decrementTime = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
//   const profilesRef = admin.firestore().collection('profiles'); // Replace 'profiles' with the name of your collection
// console.log("hey");
//   const profilesSnapshot = await profilesRef.get();

//   profilesSnapshot.forEach(async (profileDoc) => {
//     const profileData = profileDoc.data();

//     if (profileData['time'] > 0) {
//       await profileDoc.ref.update({
//         time: admin.firestore.FieldValue.increment(-1),
//       });
//     }
//   });

//   console.log('Time decremented for all profiles');
// });
