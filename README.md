# Mini-Project 2023

## Requirements

The following items are required to run this project:

- Node 16: Used for the app, api and cli (Tip: use NVM)
- Java: used by the Firebase emulators (Make sure that JAVA_HOME is set. Tip: use JENV)
- You need to create a firebase project (See: https://console.firebase.google.com - You will need to config for your firebase project in the .env files, .firestorerc)
- Firebase CLI (See: https://firebase.google.com/docs/cli)

## Get Started

1. Fork the repo

Go to: https://github.com/COS-301/miniproject-2023/fork

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
yarn start:emulators`
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

## Adding a new feature to the API

### CQRS Feature

> When generating the skeleton of the directory structure, do not worry about fleshing out, or even creating all of the classes that are required for the feature. Just create the directory structure, and then immediately commit and push to a development branch.
> This details all of the steps for creating all the files including the directories.

> All of these can be implemented at the same time, when implimenting, commit on a per class, and per method basis.


When implementing a CQRS feature, you are required to generate `feature`, `data-access`, and `util` folders. To do this, run the following commands:
```sh
yarn nx generate @nrwl/js:library feature --unitTestRunner=jest --directory=api/<REPLACE_WITH_MODULE_NAME> --no-interactive
yarn nx generate @nrwl/js:library data-access --unitTestRunner=jest --directory=api/<REPLACE_WITH_MODULE_NAME> --no-interactive
yarn nx generate @nrwl/js:library util --unitTestRunner=jest --directory=api/<REPLACE_WITH_MODULE_NAME> --no-interactive
```
When creating the rest of the directory structure for the feature, rename the automatically created lib folders to testing, and update the index files to reflect the change before continuing.

#### util

In util, you will define your templates. Use the other features as reference.
Create the folders:

- commands
- enums
- events
- interfaces
- requests
- responses

export everything from these folders in the index file.

#### data-access

Create the files:

- `<REPLACE_WITH_MODULE_NAME>.module.ts`
- `<REPLACE_WITH_MODULE_NAME>.repository.ts`

The repository should be be a injectable class which accesses the Firestore database.
The module should be a module that exports and provides the repository.
Add both of these files as exports in the `index.ts` if they contain data.

####  feature

In the feature directory, create the files:

- `<REPLACE_WITH_MODULE_NAME>.module.ts`
- `<REPLACE_WITH_MODULE_NAME>.sagas.ts`
- `<REPLACE_WITH_MODULE_NAME>.service.ts`

And the directories:

- commands
- events
- models

Export everyhting from these folders in the index file.

Fill commands with all the command handlers required for the feature. They should follow the naming scheme: `<REPLACE_WITH_COMMAND_NAME>.handler.ts`.
Each file should be implement the `@CommandHandler` interface. Then create a `index.ts` file and export all the classes from all of the files in this directory.

Fill events in the same way that you filled commands with all event handlers required for the feature. The files should follow the naming scheme: `<REPLACE_WITH_EVENT_NAME>.handler.ts` and should implement the `@EventHandler` interface.

Create a file called `<REPLACE_WITH_COLLECTIVE_INTERFACE_NAME>.model.ts` in the models directory. This file should implement a AggrigateRoot that contains all the interfaces defined in the util directory and provide methods that commands can call to create events.

> If you suspect that part of the interfaces are not directly related to each other, you may need to create two AggrigateRoots, before doing this, consult with the rest of the team.

In the main src directory:

In the service file, create a `@Injectable` which returns the appropriate command associated with a request.
Each method in this class should look like this:

```ts
  async updateAccountDetails(
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> {
    return await this.commandBus.execute<
      UpdateAccountDetailsCommand,
      IUpdateAccountDetailsResponse
    >(new UpdateAccountDetailsCommand(request));
  }

```

Import commands and interfaces as required.

In the sagas file, create a `@Injectable` class that provides `@Saga()` methods to react to effects where it is required.

Each method should look like this:

```ts
  @Saga()
  onAccountDetailsUpdated = (
    events$: Observable<any>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(AccountDetailsUpdatedEvent),
      map(
        (event: AccountDetailsUpdatedEvent) =>
          new UpdateProfileStatusCommand({ profile: event.profile })
      )
    );
  };
```
import Events and Commands as required.

In the module file export all `CommandHandler` in a list called `CommandHandlers`, and all `EventHandlers` in a list called `EventHandlers`.

Next for the module itself, import the `CqrsModule` from NestJS and a renamed import of the data-access module.

Then provide all `ComandHandlers`, `EventHandlers`, `Services`, and `Sagas`. Then export the Services.

```ts
@Module({
  imports: [CqrsModule, ProfilesDataAccessModule],
  providers: [
    ProfilesService,
    ...CommandHandlers,
    ...EventHandlers,
    ProfilesSagas,
  ],
  exports: [ProfilesService],
})
export class ProfilesModule {}
```

Export all of these in the index file if they contain anything.

#### Adding the feature to core.

Once the feature has been tested and has enough functionality to be deployed, it must be added to the core module of the API.

In `core.module.ts` add the main module for the feature to the list of imports.

In the functions directory, create a new `<REPLACE_WITH_FEATURE_NAME>.functions.ts` file. Then bind the appropriate https request to the correct service call and return the response.

```ts

export const updateAccountDetails = functions.https.onCall(
  async (
    request: IUpdateAccountDetailsRequest
  ): Promise<IUpdateAccountDetailsResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ProfilesService);
    return service.updateAccountDetails(request);
  }
);
```

----

