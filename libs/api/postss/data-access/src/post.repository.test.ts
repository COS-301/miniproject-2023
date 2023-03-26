import {PostRepository} from "./post.repository";
import {IPost} from "@mp/api/postss/util";

describe('Trending Posts Repository Test', () => {

    it("Should be an async function ", async ()=>{
        const repository = new PostRepository;
        const target = repository.findTrendingByLikes();
        expect(!!target && typeof target.then === 'function').toBe(true)
    })

    it("Should return an array", async ()=>{
        const repository = new PostRepository;
        const result = repository.findTrendingByLikes();

        const post: IPost = {
            postID: "123",
            createdBy: "",
            ownedBy: "",
            likes: 0

        };

        const posts: IPost[] = [post];

        expect(typeof(await result) == typeof(posts)).toBe(true);
    })
    
    it("Should return a size 30 array", async ()=>{
        const repository = new PostRepository;
        const result = repository.findTrendingByLikes();
        expect((await result).length).toBeLessThanOrEqual(30);
    })
})


describe('Find One Repository Test', () => {

    it("Should be a async function promise ", async ()=>{
        const repository = new PostRepository;
        const post: IPost = {
            postID: "123",
            createdBy: "",
            ownedBy: "",
            likes: 0

        };
        const target = repository.findOne(post);
        expect(!!target && typeof target.then === 'function').toBe(true)
    })

    it("Should throw an error if missing PostID ", async ()=>{
        const repository = new PostRepository;
        const post: IPost = {
            postID: "",
            createdBy: "",
            ownedBy: "",
            likes: 0

        };
        expect(() => repository.findOne(post)).toThrow(Error);
        expect(() => repository.findOne(post)).toThrow("No PostID");
    })
    
})
