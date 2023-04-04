import { MessageService } from '@mp/api/message/feature';
import { 
    IDeleteMessageRequest,
    IDeleteMessageResponse,
    ISendMessageRequest,
    ISendMessageResponse
} from '@mp/api/message/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const sentMessage = functions.https.onCall(
    async (
        req: ISendMessageRequest
    ): Promise<ISendMessageResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(MessageService);
        return service.sendMessage(req);
    }
);


export const deleteMessage = functions.https.onCall(
    async (
        req: IDeleteMessageRequest
    ): Promise<IDeleteMessageResponse> => {
        const app = await NestFactory.createApplicationContext(CoreModule);
        const service = app.get(MessageService);
        return service.deleteMessage(req);
    }
);
  