// import { TestBed } from '@angular/core/testing';
// import { NgxsModule, Store } from '@ngxs/store';
// import { PostApi } from '../post.api';
// import { PostState, PostStateModel } from '../post.state';
// import {
//   GetPostByUserId,
//   GetPostByHashtag,
//   SubscribeToPost,
//   SetPosts,
//   SetPost,
//   PostTrendingGet
// } from '@mp/app/postss/util';
// import { of } from 'rxjs';
// import { IPosts, Hashtag, IPost } from '@mp/api/postss/util';

// describe('PostsState', () => {
//   let store: Store;
//   let postApi: PostApi;

//   const mockPostApi = {
//     getPostByUserId: jest.fn(),
//     getPostByHashtag: jest.fn(),
//     postTrendingGet: jest.fn(),
//     post$: jest.fn()
//   };

//   const mockPosts: IPosts = {
//     posts: [
//       {
//         postID: '1',
//         createdBy: 'user1',
//         ownedBy: 'user1',
//         likes: 0,
//         createdAt: null,
//         hashtag: Hashtag.OTHER
//       },
//       {
//         postID: '2',
//         createdBy: 'user2',
//         ownedBy: 'user2',
//         likes: 0,
//         createdAt: null,
//         hashtag: Hashtag.OTHER
//       }
//     ]
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [NgxsModule.forRoot([PostState])],
//       providers: [{ provide: PostApi, useValue: mockPostApi }]
//     });

//     store = TestBed.inject(Store);
//     postApi = TestBed.inject(PostApi);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // it('should get posts by user ID', async () => {
//   //   mockPostApi.getPostByUserId.mockReturnValue(Promise.resolve(mockPosts));

//   //   await store.dispatch(new GetPostByUserId('user1')).toPromise();

//   //   const postsState: PostsStateModel = store.selectSnapshot(PostState);
//   //   expect(postsState).toEqual(mockPosts);
//   // });

//   // it('should get posts by hashtag', async () => {
//   //   mockPostApi.getPostByHashtag.mockReturnValue(Promise.resolve(mockPosts));

//   //   await store.dispatch(new GetPostByHashtag(Hashtag.OTHER)).toPromise();

//   //   const postsState: PostsStateModel = store.selectSnapshot(PostState);
//   //   expect(postsState).toEqual(mockPosts);
//   // });

//   // it('should set posts to the state', () => {
//   //   store.dispatch(new SetPosts(mockPosts));

//   //   const postsState: PostsStateModel = store.selectSnapshot(PostState);
//   //   expect(postsState.posts).toEqual(mockPosts);
//   // });

//   it('should set post', () => {
//     const post: IPost = {
//       postID: '1',
//       createdBy: 'user1',
//       ownedBy: 'user1',
//       likes: 0,
//       createdAt: null,
//       hashtag: Hashtag.OTHER
//     };

//     store.dispatch(new SetPost(post));

//     const postState: PostStateModel = store.selectSnapshot(PostState);
//     expect(postState.post).toEqual(post);
//   });

// //   it('should get trending posts', async () => {
// //     mockPostApi.postTrendingGet.mockReturnValue(Promise.resolve(mockPosts.posts));

// //     await store.dispatch(new PostTrendingGet()).toPromise();
// //     const postsState: PostsStateModel = store.selectSnapshot(PostState);
// // expect(postsState).toEqual(mockPosts);
// //   });

//   it('should subscribe to posts', (done) => {
//     const updatedPost: IPost = {
//     postID: '1',
//     createdBy: 'user1',
//     ownedBy: 'user1',
//     likes: 1,
//     createdAt: null,
//     hashtag: Hashtag.OTHER
//     };

//     mockPostApi.post$.mockReturnValue(of(updatedPost));

//     store.dispatch(new SetPosts(mockPosts));
//     store.dispatch(new SubscribeToPost());

//     // Wait for the state to update
//     setTimeout(() => {
//       const postState: PostStateModel = store.selectSnapshot(PostState);
//       //const postsState: PostsStateModel = store.selectSnapshot(PostState);

//       expect(postState.post).toEqual(updatedPost);
//       //if(postsState.posts != null && postsState.posts.posts != null)
//         //expect(postsState.posts.posts[0]).toEqual(updatedPost);


//       done();
//     }, 100);
// });
// });
