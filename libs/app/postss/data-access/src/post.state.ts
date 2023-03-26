import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  Hashtag,
  IPost,
  IPosts,
  IComment,
  ICreatePostRequest
} from '@mp/api/postss/util';
import { AuthState } from '@mp/app/auth/data-access';
import { Logout as AuthLogout } from '@mp/app/auth/util';
import { SetError } from '@mp/app/errors/util';
import { Timestamp } from 'firebase-admin/firestore';
import {
  SetPosts,
  SetPost,
  CreatePost,
  GetPostByUserId,
  PostTrendingGet,
  GetPostByHashtag,
  CommentOnPost,
  LikePost,
  BuyPost
} from '@mp/app/postss/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce, {createDraft} from 'immer';
import { tap } from 'rxjs';
import { PostApi } from './post.api';
import { SubscribeToPost } from '@mp/app/postss/util';
import { firebaseApp$ } from '@angular/fire/app';
import { firestore } from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

/*
Individual Post State Model
*/

export interface PostStateModel {
  post: IPost | null;
  postDetailsForm: {
    model: {
      postID: string;
      createdBy: string;
      ownedBy: string | null | undefined;
      likes: number;
      comments: IComment[] | null;
      createdAt?: Timestamp | null | undefined;
      content?: string | null | undefined;
      hashtag?: Hashtag | null | undefined;
      caption?: string | null | undefined;
      totalTime?: number | null | undefined
      ownerGainedTime?: number | null | undefined
      listing?: number | null | undefined

    };
    dirty: false;
    status: string;
    errors: object;
  };
}


/*
Array of Post objects
*/
export interface PostsStateModel {
  posts: IPosts | null;
  postsDetailsForm: {
    model: {
      posts: IPost[] | null
    };
    dirty: false;
    status: string;
    errors: object;
  };
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: null,
    postsDetailsForm: {
      model: {
        posts: null
      },
      dirty: false,
      status: '',
      errors: {},
    }
  }
})

@State<PostStateModel>({
  name: 'post',
  defaults: {
    post: null,
    postDetailsForm: {
      model: {
        postID: '',
        createdBy: '',
        ownedBy: '',
        likes:0, //fixed like left out  before
        comments: null,
        createdAt: null,
        content: '',
        hashtag: Hashtag.OTHER,
        caption: '',
        totalTime: 0,
        ownerGainedTime: 0,
        listing: null
      },
      dirty: false,
      status: '',
      errors: {},
    }
  }
})
@Injectable()
export class PostState { /* changed from 'PostsState' to 'PostState' */
  constructor(
    private readonly postApi: PostApi,
    private readonly store: Store
  ) { }

  @Selector()
  static posts(state: PostsStateModel) {
    return state.posts;
  }

  @Selector()
  static post(state: PostStateModel) {
    return state.post;
  }

  //This function will set the posts to the state
  @Action(GetPostByUserId)
  async getPostByUserId(ctx: StateContext<PostsStateModel>, action: GetPostByUserId) {
    try {
      const posts = await this.postApi.getPostByUserId(action.userId);
      ctx.patchState({ posts: posts });
    } catch (error) {
      ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(GetPostByHashtag)
  async getPostByHashtag(ctx: StateContext<PostsStateModel>, action: GetPostByHashtag) {
    try {
      const posts = await this.postApi.getPostByHashtag(action.hashtag);
      ctx.patchState({ posts: posts });
    } catch (error) {
      ctx.dispatch(new SetError((error as Error).message));
    }
  }


//This function will subscribe to the current posts that are loaded
  @Action(SubscribeToPost)
  subscribeToPosts(ctx: StateContext<PostsStateModel>) {
    const postsToLook = this.store.selectSnapshot(PostState.posts);
    if (!postsToLook || postsToLook.posts == null) return ctx.dispatch(new SetError('Posts not Set'));

    // Subscribe to changes in each post
    postsToLook.posts.forEach((post: IPost) => {
      this.postApi
        .post$(post.postID)
        .pipe(
          map((updatedPost: IPost) => {
            // Update the PostsState and internal PostState
            const postsInt = ctx.getState().posts;
            if (postsInt && postsInt.posts != null) {
              const index = postsInt.posts.findIndex(p => p.postID === updatedPost.postID);
              if (index !== -1) {
                postsInt.posts[index] = updatedPost;
                ctx.patchState({ posts: postsInt });
              }
            }
            return updatedPost;
          }),
          tap((updatedPost: IPost) => {
            const postState = this.store.selectSnapshot(PostState.post);
            if (postState && postState.postID === updatedPost.postID) {
              ctx.dispatch(new SetPost(updatedPost));
            }
          })
        )
        .subscribe();
    });

    return;

  }

  @Action(SetPosts)
  setPosts(ctx: StateContext<PostsStateModel>, { posts }: SetPosts) {
    return ctx.setState(
      produce((draft) => {
        draft.posts = createDraft(posts);
      })
    );
  }

  @Action(SetPost)
  setPost(ctx: StateContext<PostStateModel>, { post }: SetPost) {
    return ctx.setState(
      produce((draft) => {
        draft.post = createDraft(post);
      })
    );
  }

  @Action(PostTrendingGet)
  async postTrendingGet(ctx: StateContext<PostsStateModel>) {
    try {
      const posts = await this.postApi.postTrendingGet();
      ctx.patchState({ posts: { posts } });
    } catch (error) {
      ctx.dispatch(new SetError((error as Error).message));
    }
  }  

  
  @Action(LikePost)
  async likePost(ctx: StateContext<PostStateModel>, action: LikePost) { 
    try {
      const post = await this.postApi.likePost(action.postID);
      ctx.dispatch(new SetPost(post));
    } catch (error) {
      ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(CommentOnPost)
  async commentOnPost(ctx: StateContext<PostStateModel>, action: CommentOnPost) {
    try {
      const post = await this.postApi.commentOnPost(action.postId, action.comment);
      ctx.dispatch(new SetPost(post));
    } catch (error) {
      ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(BuyPost)
  async buyPost(ctx: StateContext<PostStateModel>, action: BuyPost) {
    try {
      const post = await this.postApi.buyPost(action.postId, action.buyerID);
      ctx.dispatch(new SetPost(post));
    } catch (error) {
      ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(SubscribeToPost)
  subscribeToProfile(ctx: StateContext<PostStateModel>) {
    const user = this.store.selectSnapshot(AuthState.user);
    if (!user) return ctx.dispatch(new SetError('User not set'));

    return this.postApi
      .post$(user.uid)
      .pipe(tap((profile: IPost) => ctx.dispatch(new SetPost(profile))));
  }
  @Action(SetPost)
  setProfile(ctx: StateContext<PostStateModel>, { post }: SetPost) {
    return ctx.setState(
      produce((draft) => {
        draft.post = post;
      })
    );
  }
  @Action(CreatePost)
  async createPost(ctx: StateContext<PostStateModel>) {
    try {
      const state = ctx.getState();
      const createdBy = state.post?.createdBy;
      const ownedBy = state.post?.createdBy;
      const content = state.post?.content;
      const caption = state.post?.caption;
      const hashtag = state.post?.hashtag;
      const postID = state.post?.createdBy+"1";
      const likes = 0;
      const createdAt=firestore.Timestamp.now();
      if (!createdBy || !content || !caption || !hashtag)
        return ctx.dispatch(
          new SetError(
            'UserId or display name or email or photo URL or password not set'
          )
        );

      const request: ICreatePostRequest = {
        post: {
          postID,
          createdBy,
          ownedBy,
          likes,
          createdAt,
          content,
          hashtag,
          caption,
        },
      };
      const responseRef = await this.postApi.createPost(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetPost(response.post));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }

    
  }

  

  

  /*

  Examples from profile, remove later

  @Action(SetProfile)
  setProfile(ctx: StateContext<ProfileStateModel>, { profile }: SetProfile) {
    return ctx.setState(
      produce((draft) => {
        draft.profile = profile;
      })
    );
  }

  @Action(UpdateAccountDetails)
  async updateAccountDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const displayName = state.accountDetailsForm.model.displayName;
      const email = state.accountDetailsForm.model.email;
      // const photoURL = state.accountDetailsForm.model.photoURL;
      const password = state.accountDetailsForm.model.password;

      if (!userId || !displayName || !email || !password)
        return ctx.dispatch(
          new SetError(
            'UserId or display name or email or photo URL or password not set'
          )
        );

      const request: IUpdateAccountDetailsRequest = {
        profile: {
          userId,
          accountDetails: {
            displayName,
            email,
            password,
          },
        },
      };
      const responseRef = await this.profileApi.updateAccountDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
  */
}



