import { Injectable } from '@angular/core';
import {
  Hashtag,
  IPost,
  IPosts
} from '@mp/api/postss/util';
import { AuthState } from '@mp/app/auth/data-access';
import { Logout as AuthLogout } from '@mp/app/auth/util';
import { SetError } from '@mp/app/errors/util';
import { Timestamp } from 'firebase-admin/firestore';
// import {
//   SetPost
//   //SubscribeToPost,
//   // UpdateAccountDetails,
//   // UpdateAddressDetails,
//   // UpdateContactDetails,
//   // UpdateOccupationDetails,
//   // UpdatePersonalDetails
// } from '@mp/app/post/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { tap } from 'rxjs';
import { PostApi } from './post.api';
import { NOTIMP } from 'dns';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

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
      createdAt?: Timestamp | null | undefined;
      content?: String | null | undefined;
      hashtag?: Hashtag | null | undefined;
      caption?: String | null | undefined;
      totalTime?: number | null | undefined
      ownerGainedTime?: number | null | undefined
      listing?: number | null | undefined

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
        ownedBy: null,
        createdAt: null,
        content: '',
        hashtag: null,
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
export class PostsState {
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

  
  /*
  @Action(SubscribeToPost)
  subscribeToPost(ctx: StateContext<PostStateModel>) {
    const user = this.store.selectSnapshot(AuthState.user);
    if (!user) return ctx.dispatch(new SetError('User not set'));
    
    return "Not implemented yet";
   
    Example from profile
    return this.profileApi
      .profile$(user.uid)
      .pipe(tap((profile: IProfile) => ctx.dispatch(new SetProfile(profile))));
      
  }
  */

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



