import {ISendMessageResponse, SendMessageCommand} from "@mp/api/message/util";
import {ISendMessageRequest} from "@mp/api/message/util";
import { MessageService, SendMessageHandler } from '@mp/api/message/feature';
import { MessageModule } from "@mp/api/message/feature";
import {Test, TestingModule} from "@nestjs/testing";
import {CommandBus, CqrsModule} from '@nestjs/cqrs';
import * as firebase from "firebase-admin";

describe('apiMessageFeature', () => {
  let commandBus: CommandBus;
  let firestore: firebase.firestore.Firestore;
  const firebaseAppInstance = firebase.initializeApp({
    projectId: "1:486178134246:web:b0e4ee054909cabbdc8327",
    credential : firebase.credential.cert("./timehive-29588-firebase-adminsdk-bzovc-d18235ddfd.json"),
    databaseURL : "http://127.0.0.1:5004/?ns=timehive-29588-default-rtdb"
  })
  firestore = firebaseAppInstance.firestore();
    beforeEach(async () => {
    const controler: TestingModule = await Test.createTestingModule({
      imports : [CqrsModule, MessageModule],
      providers : [SendMessageHandler, ]
    }).compile();
    await controler.init()
    commandBus = controler.select(CqrsModule).get<CommandBus>(CommandBus);
  });

  afterAll(async () => {
    // Stop the Firestore emulator
    await firebase.app().delete();
  });

  describe('sendMessage', () => {
    it("should exectute a command" , async () => {
      const messageToSend:ISendMessageRequest =
	{
	conversation : {
	  conversationID : "testing",
	  messages : [
	    {
	      metaData : {
		sender : {
		  userId : "gustav testing",
		},
		timePosted : 0,
	      },
	      content : {
		textData : "testing testing 123",
	      },
	    },
	  ]
	}
      }
      const messageToSendCopy: ISendMessageRequest = JSON.parse(JSON.stringify(messageToSend));
      const result: ISendMessageResponse = { message: messageToSendCopy.conversation.messages![0] };
      const send = await commandBus.execute(new SendMessageCommand(messageToSend));
      console.log(send);
      expect({...send}).not.toMatchObject({...result});
    });
  })

  describe('firebase fucking test', () => {
    it ("should write someththing", async () => {
      firestore.collection("testing").add(test);
      firestore.collection("testing").doc("test").create({test : "test"});
      expect(firestore.collection("testing").doc("test")).toMatchObject({test :"test"});
    })
  });
});
