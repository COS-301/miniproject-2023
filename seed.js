require('dotenv').config();
const admin = require('firebase-admin');
const { faker } = require('@faker-js/faker');
const { Timestamp } = require('firebase-admin/firestore');
const { user } = require('firebase-functions/v1/auth');

const app = admin.initializeApp({ projectId: 'demo-project' });

const firestore = admin.firestore(app);
firestore.settings({
  host: process.env.FIRESTORE_EMULATOR_HOST,
  ssl: false,
});

async function seedUsers() {
  const users = generateUsers(100);
  const batch = firestore.batch();

  users.forEach((user) => {
    const userRef = admin.firestore().collection('Users').doc(user.userId);
    batch.set(userRef, user);
  });

  try {
    await batch.commit();
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding user profiles: ', error);
  }
}

function generateUsers(numUsers) {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const name = faker.name.firstName();
    const surname = faker.name.lastName();
    const user = {
      userId: faker.datatype.uuid(),
      name: name,
      surname: surname,
      username: faker.internet.userName(name, surname),
      email: faker.internet.email(name, surname),
      profileImgUrl: faker.internet.avatar(),
      bio: faker.lorem.sentence(),
      friendCount: 0,
      memoryCount: 0,
      accountTime: 86400, // 24 hours
      lastOnline: Timestamp.now(),
      online: false,
      created: Timestamp.now(),
    };

    users.push(user);
  }

  return users;
}

async function seedMemories() {
  const users = generateMemories(10);
  const batch = firestore.batch();

  users.forEach((user) => {
    const userRef = admin.firestore().collection('Users').doc(user.userId);
    batch.set(userRef, user);
  });

  try {
    await batch.commit();
    console.log('Memories seeded successfully.');
  } catch (error) {
    console.error('Error seeding user memories: ', error);
  }
}

async function generateMemories(numMemories, numComments) {
  const usersSnapshot = await firestore.collection('Users').get();

  usersSnapshot.forEach(async (userDoc) => {
    const memories = [];

    const batch = firestore.batch();
    const user = userDoc.data();

    for (let i = 0; i < numMemories; i++) {
      const memory = {
        userId: user.userId,
        memoryId: faker.datatype.uuid(),
        username: user.username,
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph(3),
        imgUrl: faker.image.imageUrl(),
        profileImgUrl: user.profileImgUrl,
        created: Timestamp.now(),
        commentsCount: numComments,
        remainingTime: 3600,
        alive: true,
        // comments: await generateComments(numComments, pickRandomElements(usersSnapshot.docs, 20)),
      };

      memories.push(memory);
    }

    memories.forEach((memory) => {
      const memoryRef = admin.firestore().collection('Memories').doc(memory.memoryId);
      batch.set(memoryRef, memory);
    });

    try {
      await batch.commit();
    } catch (error) {
      console.error('Error seeding user memories: ', error);
    }
  });

  console.log('Memories seeded successfully.');
}

async function generateComments(numComments, userDocs) {
  const comments = [];

  for (let i = 0; i < numComments; i++) {
    const user = randomElement(userDocs).data();
    const comment = {
      userId: user.userId,
      username: user.username,
      profileImgUrl: user.profileImgUrl,
      text: faker.lorem.paragraph(1),
      created: Timestamp.now(),
    };

    comments.push(comment);
  }

  return comments;
}

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickRandomElements(arr, n) {
  if (n > arr.length) {
    throw new Error('n cannot be greater than the length of the array');
  }
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

async function seedData() {
  // seedUserProfiles();
  await seedUsers();
  await generateMemories(3, 5);
}

seedData();
