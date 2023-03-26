import { SubscribeToPost, SetPosts, SetPost, GetPostByUserId, PostTrendingGet, GetPostByHashtag } from '../post.actions';
import {IPosts, IPost, Hashtag} from '@mp/api/postss/util';

describe('Post Actions', () => {
  it('should create a SubscribeToPost action', () => {
    expect(SubscribeToPost.type).toBe('[Post] SubscribeToPost');
  });

  it('should create a SetPosts action', () => {
    const posts: IPosts = { posts: [] };
    const action = new SetPosts(posts);
    expect(SetPosts.type).toBe('[Posts] SetPosts');
    expect(action.posts).toBe(posts);
  });

  it('should create a SetPost action', () => {
    const post: IPost = { postID: '1', createdBy: 'testUser', likes:0 ,ownedBy: 'testUser'};
    const action = new SetPost(post);
    expect(SetPost.type).toBe('[Post] Set Post');
    expect(action.post).toBe(post);
  });

  it('should create a GetPostByUserId action', () => {
    const userId = 'testUser';
    const action = new GetPostByUserId(userId);
    expect(GetPostByUserId.type).toBe('[Post] Get Post By User Id');
    expect(action.userId).toBe(userId);
  });

  it('should create a PostTrendingGet action', () => {
    const action = new PostTrendingGet();
    expect(PostTrendingGet.type).toBe('[Posts] Post Trending Get');
  });

  it('should create a GetPostByHashtag action', () => {
    const hashtag = Hashtag.NATURE;
    const action = new GetPostByHashtag(hashtag);
    expect(GetPostByHashtag.type).toBe('[Posts] Get Post By Hashtag');
    expect(action.hashtag).toBe(hashtag);
  });
});