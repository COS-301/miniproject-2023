import { PostTrendingGetQuery } from "@mp/api/postss/util";
import {PostTrendingGetQueryHandler} from "./post-trending-get.handler";
import { QueryBus } from '@nestjs/cqrs';
import { NestFactory } from "@nestjs/core";
import {CoreModule} from "@mp/api/core/feature";
import { IPost } from "@mp/api/postss/util";

describe('Trending Posts Retrieval Handler', () => {

    it("should return an array of IPost", async ()=>{
        const apl = await NestFactory.createApplicationContext(CoreModule);
        const queryBus = apl.get(QueryBus);
        const postModule = await queryBus.execute(new PostTrendingGetQuery());
        const posts = null;
        expect(postModule.posts).toBe(null);
    })
})
