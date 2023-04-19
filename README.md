# Lapse 
> Mini-Project Group 3 2023

## Description
>Lapse is a unique social media platform that uses time as a currency to foster meaningful interactions between users. By creating a time-based economy, the platform aims to encourage users to engage with quality content and discourage mindless scrolling and poor content. Lapse will offer an engaging and user-friendly environment for users to connect, share, and invest in content.

>Users can spend time engaging with content, and in return, they earn time by creating meaningful or engaging content. The platform also allows users to invest in the content they see potential in, further encouraging content creators.

## Requirements

The following items are required to run this project:

- Node 16: Used for the app, api and cli (Tip: use NVM)
- Java: used by the Firebase emulators (Make sure that JAVA_HOME is set. Tip: use JENV)
- You need to create a firebase project (See: https://console.firebase.google.com - You will need to config for your firebase project in the .env files, .firestorerc)
- Firebase CLI (See: https://firebase.google.com/docs/cli)

## Get Started

1. Fork the repo

Go to: https://github.com/LapseMP/lapse-grp3-2023/fork

2. Clone your fork

```sh
git clone git@github.com:<ACCOUNT>/<PROJECT NAME>.git <PROJECT LOCAL NAME>
```

3. Install dependencies

```sh
cd path/to/project
yarn
```

4. Add Firebase configurations

See files:

- .firebaserc
- .env
- .env.pod

and find and replace "<REPLACE_ME>"

5. Run the stack:

Run these commands in separate terminals:

```sh
yarn start:api:dev
yarn start:emulators
yarn start:app:dev
```

6. CLI:

If you want to run the cli for admin, scripts, migrations etc.

```sh
yarn build:cli:prod
GOOGLE_APPLICATION_CREDENTIALS=.keys/<REPLACE ME WITH SERVICE ACCOUNT KEY.json> FIRESTORE_EMULATOR_HOST=localhost:5003 node dist/apps/cli/main.js <REPLACE ME WITH COMMAND>
```

## Emulators:

Once the emulators are up, please go to http://localhost:5001 to see the Emulator UI

## Notes!!:

- When creating your Firebase authentication, hosting, storage, functions. Make sure to use the same location throughout. (MAKE SURE TO SET "Default GCP resource location" in Project Settings in Firebase Console. If you do not do this, the app will not work)
- The app is built to be a PWA. (See: So if you deploy it to prod, you can install the app on iOS by adding to home screen or using Android by installing through Chrome)

##Features
This social media app includes the following features:

- Posting Posts: Users can create and post content on the platform, which can be viewed by other users.
- Buying Posts: Users can use their time currency to purchase posts created by other users.
- Viewing Profile: Users can view their own profile which displays all the posts they have created
- Viewing Portfolio: Users can view their portfolios which displays all the posts they have bought.
- Searching by User or hashtag: Users can search for other users's posts by username or search for posts by hashtag

## Our Team

* > Project Manager: Inge 
* > Business Analyst: Daniel 
* > Designer: Chris L
* > UI Engineers:  Ronin / Julian 
* > Integration Engineers: Paul / Priyul / Lesedi
* > Service Engineers:  Mark / Triumph
* > Data Engineer: Chris M
* > Tester: Janco
* > DevOps: Stefan
