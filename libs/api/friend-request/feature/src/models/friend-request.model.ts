import { IFriendRequest,Status } from "@mp/api/friend-request/util";
import {AggregateRoot} from '@nestjs/cqrs'; 
import {Timestamp} from 'firebase-admin/firestore'


class FriendRequest extends AggregateRoot implements IFriendRequest{ 
    constructor( 
        public id : string | null | undefined, 
        public from: string | null | undefined, 
        public to : string | null | undefined, 
        public status : Status | null | undefined,
        public sent?: Timestamp | null | undefined
    ){ 
        super();
    }

    static fromData(friendRequest: IFriendRequest) : FriendRequest { 
        const instance=new FriendRequest( 
            friendRequest.id,
            friendRequest.from,
            friendRequest.to,
            friendRequest.status,
            friendRequest.sent
        );
        return instance;

    }

    // updateStatus(){

    // }


//    create() { 

//    }
  
     toJSON() :IFriendRequest { 
       return  { 
          id:this.id,
          from:this.from, 
          to:this.to, 
          status:this.status, 
          sent:this.sent
       }   
 
     }

}