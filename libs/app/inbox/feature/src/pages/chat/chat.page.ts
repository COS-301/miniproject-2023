import { Component, OnInit } from '@angular/core';
//import { MessageService } from 'libs/api/message/feature/src/message.service'
import { ActivatedRoute } from '@angular/router';
import { httpsCallable, getFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPageComponent implements OnInit {
  name = 'Sender';
  receiver =  "";
  message!: string;
  isLoading = false;
  currentUserId = 1;
  conversationID = 1;
  chats = [
    { id: 1, sender: 1, message: 'hi' },
    { id: 2, sender: 2, message: 'hey' }
  ];  //some stuff need to be added/changed here. This is mock data

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('');
    const myQueryParams = this.route.snapshot.queryParams;
    

  }

  async sendMessage() {
    const functions=getFunctions();
    const sendMsg=httpsCallable(functions,'sendMessage');
    sendMsg({/**message data */})
      .then(results =>{
        /**Logic on how to handle response */
      })
      .catch(error => {
        /**logic on how to display error */
      })
    // if (this.message?.trim() == "" || !this.message) {
    //   //If there is a blank message or  a message that is just white space, it is not a valid message so  don't send it
    //   return;
    // }
    // try {
    //   this.isLoading = true;
    //   let myConversation = {
    //     conversationID : this.conversationID,
    //     messages : this.message,
    //     members : [this.currentUserId, this.chats[1].sender],
    //   };  //this myConversation object is not correct. Some stuff need to be changed.
    //   let myRequest = {conversation:myConversation};
    //   await MessageService.prototype.sendMessage(myRequest);
    //   this.message = "";//this is to make the textarea where the message was entered blank
    //   this.isLoading = false;
    // } catch(error){
    //   console.log("error occured");
    //   console.log(error);
    // }
    
  }
}
