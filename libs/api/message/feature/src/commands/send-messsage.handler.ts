import { MessageRepository } from '@mp/api/message/data-access';
import {
    ISendMessageResponse,
    MessageSentEvent,
    SendMessageCommand
} from '@mp/api/message/util';

import {CommandHandler, EventBus, ICommandHandler} from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";

@CommandHandler(SendMessageCommand)
export class SendMessageHandler implements ICommandHandler<SendMessageCommand, ISendMessageResponse>{

  constructor(
    @Inject(EventBus) private readonly eventBus : EventBus,
    private readonly repository: MessageRepository
  ) {}

  async execute(command: SendMessageCommand) : Promise<ISendMessageResponse> {
    const request = command.request.conversation;
    /**
     * few notes on actual implementation
     */
    /*const Response={
      id: "Message-User1-to-User2",
      content: {textData:"Hey There, how you doing ;)"},
      metaData: {
        timePosted: 123456789,
        sender : {
          userId: "User-1"
        }
      }
    }*/

    console.log("------>   Message Loading...                  <---------------");
    console.log("------>   Save Message to the database        <---------------");
    //console.log("------>   TimeHive Database: "+Response);
    console.log("------>   Load Message to the Sender screen   <---------------");

    //MOCK DATA, FAKE RESPONSE
    
    /*const account : IProfile {
      userId: "User-1"
    }

    const MetaData:IMessageMetaData={
      timePosted: 123456789,
      sender : account
    }
    

    const Content : IMessageContent={
      textData:"Hey There, how you doing ;)"
    }

    const response: IMessage={
      id: "Message-User1-to-User2",
      content: Content,
      metaData: MetaData
    }*/
    // const response:ISendMessageResponse={'message' : Response};
    // return response;
  
  ///Not sure I get the logic here :)

    // TODO authentication
    /*
    check requests authentication details
    if they are unauthorized then reject
    
    this.eventBus.publish(new MessageSentEvent(request));

    // TODO maybe we should return the next 10 like we would in the paging thing.
    const sentMessage = request.messages[request.messages.length-1];
    const response : ISendMessageResponse = {message:sentMessage};
    return response;*/

    //save Message to the database
    /**
     * messed up logic here will look into it....
     * not sure which logic we will be using???
     * Write to the database then return what was already written or what???.....
     * no event was triggered...not a very good implementation....
     */
   const addToDataBase=await this.repository.sendMessage(request);
   const msg:IMessage=await (await this.repository.getMessage(request)).data();

   const response : ISendMessageResponse = {message:msg};
   return response;
  }
}
