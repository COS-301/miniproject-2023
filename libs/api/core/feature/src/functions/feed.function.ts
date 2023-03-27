
import { FeedService } from '@mp/api/feed/feature';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const fetchPosts = functions.https.onCall(
  async (
    request: any
  ): Promise<any> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(FeedService, { strict: false });
    return service.fetchPosts(request);
  }
);