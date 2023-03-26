import {MemoriesService} from '@mp/api/memories/feature';
import {
    ICreateMemoryRequest,
	ICreateMemoryResponse
} from '@mp/api/memories/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const createMemory = functions.https.onCall(
    async (
      request: ICreateMemoryRequest
    ): Promise<ICreateMemoryResponse> => {
      const app = await NestFactory.createApplicationContext(CoreModule);
      const service = app.get(MemoriesService);
      return service.createMemory(request);
    }
  );
  