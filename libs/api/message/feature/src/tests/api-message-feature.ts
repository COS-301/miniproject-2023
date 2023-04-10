import { ISendMessageRequest, SendMessageCommand } from '@mp/api/message/util';
import { MessageService } from '../message.service';
import {CommandBus, ICommand} from "@nestjs/cqrs";
import * as admin from 'firebase-admin';


export function apiMessageFeature(): string {
  return 'api-message-feature';
}

export function sendMessageFeature(){
  
  const myIMessage = {
    id:"1", //will have to get the message id
    content : {
      textData: "Hello At Thabo Testing Testing here",
      video: null,
      photo:null
    },
    metaData : {
      timePosted : 655000000,
      sender : {
        userID:"User 1"
      }
    }
  };

  const myConversation = {
    conversationID : "con 1", ///some conversation ID.
    messages : myIMessage,
    members : ["User 1", "User 2"],
  }

  return myConversation;
}
