import { IComment } from '@mp/api/comments/util';
import { IMemory } from '@mp/api/memories/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class CommentsRepository {
  //TODO implement
  async getComments(memory: IMemory) {
    return null;
  }
  
  async createComment(comment: IComment) {
    return null;
  }

  async editComment(comment: IComment) {
    return null;
  }
}
