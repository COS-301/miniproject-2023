import {ISendMessageResponse, SendMessageCommand} from "@mp/api/message/util";
import {ISendMessageRequest} from "@mp/api/message/util";
import { SendMessageHandler } from '@mp/api/message/feature';
import { MessageModule } from "@mp/api/message/feature";
import {Test, TestingModule} from "@nestjs/testing";
import {CommandBus, CqrsModule} from '@nestjs/cqrs';
import * as firebase from "firebase-admin";
import {Timestamp } from 'firebase-admin/firestore';

describe('apiMessageFeature', () => {
  let commandBus: CommandBus;
  firebase.initializeApp({
    projectId: "timehive-29588",
  })
  const db = firebase.firestore()
  db.settings({
    host: "localhost:5003",
    ssl: false
  });

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
		timePosted : Timestamp.now(),
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
      expect({...send}).not.toStrictEqual({...result});
    });
  })
});
