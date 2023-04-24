// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

// export const updateUserTimeAttribute = functions.https.onRequest(async (req, res) => {
//     const timeToAdd = 100;
//     const usersRef = admin.firestore().collection('profiles');
//     const snapshot = await usersRef.get();
  
//     console.log('Snapshot data:', snapshot.docs.map((doc) => doc.data()));
  
//     const updates: FirebaseFirestore.WriteBatch = admin.firestore().batch();
//     snapshot.docs.forEach((doc) => {
//       updates.update(doc.ref, { time: timeToAdd });
//     });
  
//     await updates.commit();
//     console.log('Updated users.time attribute for all profiles');
//     res.status(200).send('Updated users.time attribute for all profiles');
//   });

/* the above code adds 100 to time on a page reload - used for testing on emulator :) */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const updateUserTimeAttribute = functions.pubsub.schedule('0 0 * * *').timeZone('Africa/Johannesburg').onRun(async (context) => {
  const timeToAdd = 100;
  const usersRef = admin.firestore().collection('profiles');
  const snapshot = await usersRef.get();

  console.log('Snapshot data:', snapshot.docs.map((doc) => doc.data()));

  const updates: FirebaseFirestore.WriteBatch = admin.firestore().batch();
  snapshot.docs.forEach((doc) => {
    const currentTime = doc.data()['time'] || 0; 
    updates.update(doc.ref, { time: currentTime + timeToAdd });
  });

  await updates.commit();
  console.log('Updated users.time attribute for all profiles');
});
