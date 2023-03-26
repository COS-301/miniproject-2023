import {CommentsService} from '@mp/api/comments/feature';
import {
    ICreateCommentRequest,
	ICreateCommentResponse,
    IEditCommentRequest,
	IEditCommentResponse,
} from '@mp/api/comments/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const CreateComment = functions.https.onCall(
    async (
      request: ICreateCommentRequest
    ): Promise<ICreateCommentResponse> => {
      const app = await NestFactory.createApplicationContext(CoreModule);
      const service = app.get(CommentsService);
      return service.CreateComment(request);
    }
  );

  export const EditComment = functions.https.onCall(
    async (
      request: IEditCommentRequest
    ): Promise<IEditCommentResponse> => {
      const app = await NestFactory.createApplicationContext(CoreModule);
      const service = app.get(CommentsService);
      return service.EditComment(request);
    }
  );