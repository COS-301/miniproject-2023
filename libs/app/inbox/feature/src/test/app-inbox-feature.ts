import { provideFirebaseApp } from '@angular/fire/app';
import {ChatPageComponent} from '../pages/chat/chat.page';




export function appInboxFeature(){
    const chat:ChatPageComponent=new ChatPageComponent();
    chat.name = 'Sender';
    chat.receiver =  "User 1";
    chat.message = "Hello Thabo Testing Testing"
    chat.isLoading = false;
    //chat.currentUserId = 1; TODO re-impliment this feature
    chat.conversationID = 1;
    return chat.sendMessage();
}
