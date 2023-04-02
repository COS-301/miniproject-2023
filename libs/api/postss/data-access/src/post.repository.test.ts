import {PostRepository} from "./post.repository";
import {IComment, IPost} from "@mp/api/postss/util";
import { IUser } from "@mp/api/users/util";

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

/*describe("updateLikes Repository Test", () => {

  beforeEach(() => {
    post: IPost = {
      postID: "123",
      createdBy: "",
      ownedBy: "",
      likes: 0
    };
    postID = post.postID;
    updateSpy = jest.spyOn(admin.firestore().collection('post').doc(postID), 'update');
  });

  afterEach(() => {
    updateSpy.mockRestore();
  });

  it('should call firestore update with post and increment likes by 1', async () => {
    await updateLikes(post);
    expect(updateSpy).toHaveBeenCalledWith({
      post: { likes: admin.firestore.FieldValue.increment(1) }
    });
  });

  it('should increment likes by 1', async () => {
    await updateLikes(post);
    expect(post.likes).toBe(1);
  });
});*/

describe('Buy Post Test', () => {
    
  
  it('Should update the post as sold', async () => {
        const repository = new PostRepository();
        const buyer: IUser = { id: 'buyer1', name: 'John Doe' };
        const expectedPost: IPost = {
          postID: '123',
          createdBy: 'user1',
          ownedBy: 'user2',
          likes: 0,
          sold: true
        };
        const result = await repository.buyPost(expectedPost, buyer);
        expect(result.success).toBe(true);
        const updatedPost = await (await repository.findOne(expectedPost)).data() as IPost;
        expect(updatedPost.sold).toBe(true);
      });
  
    it('Should throw an error if postID is missing', async () => {
      const repository = new PostRepository();
      const post: IPost = {
        postID: '',
        createdBy: 'user1',
        ownedBy: 'user2',
        likes: 0,
        sold: false,
      };
      expect(() => repository.buyPost(post, { id: 'buyer1', name: 'John Doe' })).toThrow(Error);
      expect(() => repository.buyPost(post, { id: 'buyer1', name: 'John Doe' })).toThrow('No postID');
    });
  });

  describe('Comment On Post Test', () => {
    const post: IPost = {
    postID: '123',
    createdBy: 'user1',
    ownedBy: 'user2',
    likes: 0,
    sold: false
    };
    
    it('Should add a comment to the post', async () => {
        const repository = new PostRepository();
        const commenter: IUser = { id: 'user3', name: 'Jane Doe' };
        const comment: IComment = { creatorID: commenter.id, comment: 'Great post!' };
        const expectedPost: IPost = {
          postID: '123',
          createdBy: 'user1',
          ownedBy: 'user2',
          likes: 0,
          sold: false,
          comments: [comment]
        };
        const result = await repository.commentOnPost(expectedPost,  comment);
        expect(result.success).toBe(true);
        const updatedPost = await (await repository.findOne(expectedPost)).data() as IPost;
        expect(updatedPost.comments).toEqual(expectedPost.comments);
      });
    
    it('Should throw an error if postID is missing', async () => {
      const repository = new PostRepository();
      const post: IPost = {
        postID: '',
        createdBy: 'user1',
        ownedBy: 'user2',
        likes: 0,
        sold: false,
      };
      const commenter: IUser = { id: 'user3', name: 'Jane Doe' };
      const comment: IComment = { creatorID: commenter.id, comment: 'Great post!' };
      expect(() => repository.commentOnPost(post, comment)).toThrow(Error);
      expect(() => repository.commentOnPost(post, comment)).toThrow('No postID');
    });
    });


