export * from './auth.functions';
export * from './profiles.functions';
export * from './posts.functions';
export * from './updateUserTime.functions';

import * as functions from 'firebase-functions';
import admin from'firebase-admin';
import { getDatabase } from 'firebase-admin/database';
import axios from 'axios';
const db = admin.database();


const decrementTime = async () => {
  const profilesRef = admin.firestore().collection('profiles');
  console.log("hey");
  const profilesSnapshot = await profilesRef.get();

  // Use the Firebase REST API to get loggedInUsers data
  const databaseUrl = "http://localhost:5004" ;
  const loggedInUsersUrl = `${databaseUrl}/loggedInUsers.json?ns=cos301-mp-grp3`;
  //const loggedInUsersResponse = await axios.get(loggedInUsersUrl);
//console.log(loggedInUsersResponse.data);
let loggedInUsersResponse;
try {
  loggedInUsersResponse = await axios.get(loggedInUsersUrl);
console.log(loggedInUsersResponse.data);
} catch (error) {
  console.error('Error fetching loggedInUsers data:', error);
}

const loggedInUsers=loggedInUsersResponse?.data;
  profilesSnapshot.forEach(async (profileDoc) => {
    const profileData = profileDoc.data();
    console.log('loggedInUsers:', loggedInUsers);

    if (loggedInUsers[profileData['userId']] && profileData['time'] > 0) {
      await profileDoc.ref.update({
        time: admin.firestore.FieldValue.increment(-1),
      });
    }
  });

  console.log('Time decremented for all profiles');
};


exports.decrementTimeScheduled = functions.pubsub.schedule('every 1 minutes').onRun(decrementTime);

exports.decrementTimeHttp = functions.https.onRequest(async (req, res) => {
  try {
    await decrementTime();
    res.status(200).send('Time decremented for all profiles');
  } catch (error) {
    console.error('Error decrementing time: ', error);
    res.status(500).send('Error decrementing time');
  }
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
