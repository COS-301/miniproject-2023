import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { CoreModule } from '../core.module';
import { PostTrendingGetQuery } from '@mp/api/postss/util';
import { QueryBus } from '@nestjs/cqrs';
import { IPost } from '@mp/api/postss/util';

/*
Function that calls the postTrendingGetQuery and returns an array of IPost objects
*/
export const postTrendingGet = functions.https.onCall(
    async(): Promise<IPost[]> => {
        const apl = await NestFactory.createApplicationContext(CoreModule);
        const queryBus = apl.get(QueryBus);
        const postModule = await queryBus.execute(new PostTrendingGetQuery());
        return postModule.posts;
    }
)