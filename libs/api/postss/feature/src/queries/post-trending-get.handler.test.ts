import { PostTrendingGetQuery } from "@mp/api/postss/util";
import {PostTrendingGetQueryHandler} from "./post-trending-get.handler";
import { QueryBus } from '@nestjs/cqrs';
import { NestFactory } from "@nestjs/core";
import {CoreModule} from "@mp/api/core/feature";
import { IPost } from "@mp/api/postss/util";

describe('Trending Posts Retrieval Handler', () => {
    
    it("Should return a postModule with an array of IPost", async ()=>{
        const apl = await NestFactory.createApplicationContext(CoreModule);
        const queryBus = apl.get(QueryBus);
        const postModule = await queryBus.execute(new PostTrendingGetQuery());
        const post: IPost = {
            postID: "123",
            createdBy: "",
            ownedBy: "",
            likes: 0

        };

        let posts: IPost[] = [post];

        expect(postModule.posts == typeof(posts)).toBe(true);

    })
})