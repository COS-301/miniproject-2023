import {IComment} from '@mp/api/memories/util';
import {Injectable} from '@nestjs/common';
import *  as admin from 'firebase-admin';

@Injectable()
export class CommentRepository{ 
   //TODO implement
   async createComment(comment : IComment){ 
    
    return null;  
   }

   async editComent(comment: IComment){
    
    return null;
   }
}