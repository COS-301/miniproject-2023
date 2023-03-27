// import {  } from '@mp/api/feed/feature';
import { FeedService } from '@mp/api/feed/feature';
import {
    FetchPostsRequest,
    FetchPostsResponse,
    GetUserTimeRequest,
    GetUserTimeResponse,
    AddTimeRequest,
    AddTimeResponse,
} from '@mp/api/feed/util';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';

export const fetchPosts = functions.https.onCall(
    async (
      request: any
    ): Promise<any> => {
      const app = await NestFactory.createApplicationContext(CoreModule);
      const service = app.get(FeedService);
      return service.fetchPosts(request);
    }
  );