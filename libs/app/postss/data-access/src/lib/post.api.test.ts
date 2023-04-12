// import { TestBed } from '@angular/core/testing';
// import { Firestore } from '@angular/fire/firestore';
// import { Functions } from '@angular/fire/functions';
// import { of } from 'rxjs';
// import { PostApi} from '../post.api';
// import {Hashtag} from '@mp/api/postss/util';

// // Mock Firestore and Functions instances
// class FirestoreMock {
//   collection(path: string) {
//     return {
//       where: () => this,
//       withConverter: () => this,
//     };
//   }

//   doc(path: string) {
//     return {
//       withConverter: () => this,
//     };
//   }

//   get() {
//     // Mock data for testing purposes
//     return of([{
//         postID: "1",
//         createdBy: "u1",
//         likes: 0,
//         content: "Test content"
//       }
//       ]);
//   }
// }

// class FunctionsMock {
//   httpsCallable(name: string) {
//     return () => of([{
//         postID: '1',
//         createdBy: "u1",
//         likes: 0,
//         content: 'Test content' }]);
//   }
// }

// describe('PostApi', () => {
//   let postApi: PostApi;
//   let firestore: Firestore;
//   let functions: Functions;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         PostApi,
//         { provide: Firestore, useClass: FirestoreMock },
//         { provide: Functions, useClass: FunctionsMock },
//       ],
//     });

//     postApi = TestBed.inject(PostApi);
//     firestore = TestBed.inject(Firestore);
//     functions = TestBed.inject(Functions);
//   });

//   it('should be created', () => {
//     expect(postApi).toBeTruthy();
//   });

//   // it('should get posts by user id', async () => {
//   //   const userId = 'testUserId';
//   //   const posts = await postApi.getPostByUserId(userId);
//   //   expect(posts).toBeDefined();
//   //   expect(posts.posts == null).toBe(false);
//   //   if(posts.posts != null)
//   //       expect(posts.posts.length).toBeGreaterThanOrEqual(0);
//   // });

//   // it('should get posts by hashtag', async () => {
//   //   const hashtag = Hashtag.NATURE;
//   //   const posts = await postApi.getPostByHashtag(hashtag);
//   //   expect(posts).toBeDefined();
//   //   expect(posts.posts == null).toBe(false);
//   //   if(posts.posts != null)
//   //       expect(posts.posts.length).toBeGreaterThanOrEqual(0);
//   // });

//   // it('should get trending posts', async () => {
//   //   const posts = await postApi.postTrendingGet();
//   //   expect(posts).toBeDefined();
//   //   expect(posts.length).toBeGreaterThanOrEqual(0);
//   // });

// });
