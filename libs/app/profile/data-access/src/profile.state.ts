import { Injectable } from '@angular/core';
import {
  AgeGroup,
  Ethnicity,
  Gender,
  HouseholdIncome,
  Hashtag,
  IProfile,
  IUpdateAccountDetailsRequest,
  IUpdateAddressDetailsRequest,
  IUpdateContactDetailsRequest,
  IUpdateOccupationDetailsRequest,
  IUpdatePersonalDetailsRequest,
  ICreatePostRequest,
  IAddPostRequest,
  IPostDetails
} from '@mp/api/profiles/util';
import { AuthState } from '@mp/app/auth/data-access';
import { Logout as AuthLogout } from '@mp/app/auth/util';
import { SetError } from '@mp/app/errors/util';
import {
  Logout,
  SetProfile,
  SubscribeToProfile,
  UpdateAccountDetails,
  UpdateAddressDetails,
  UpdateContactDetails,
  UpdateOccupationDetails,
  UpdatePersonalDetails,
  CreatePostDetails,
  AddPost,
  CreateNewPost,
  FetchUserPosts,
  GetAllPosts,
  GetUserPostsByHashtag,
  BuyPost,
  FetchPortfolioPosts
} from '@mp/app/profile/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { catchError, of, tap, from } from 'rxjs';
import { ProfilesApi } from './profiles.api';
import { Timestamp } from '@angular/fire/firestore';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileStateModel {
  profile: IProfile | null;
  searchPosts: IPostDetails[];
  posts:IPostDetails[];
  profilePosts:IPostDetails[];
  time: number | null;
  accountDetailsForm: {
    model: {
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
      password: string | null;
      bio: string | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  addressDetailsForm: {
    model: {
      residentialArea: string | null;
      workArea: string | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  contactDetailsForm: {
    model: {
      cellphone: string | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  personalDetailsForm: {
    model: {
      age: AgeGroup | null;
      gender: Gender | null;
      ethnicity: Ethnicity | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  postDetailsForm: {
    model: {
      postID: string | null | undefined;
      createdBy: string | null | undefined;
      ownedBy: string | null | undefined;
      likes: number | null | undefined;
      comments: string | null | undefined;
      createdAt?: Timestamp | null | undefined;
      content?: string | null | undefined;
      hashtag?: Hashtag | null | undefined;
      caption?: string | null | undefined;
      totalTime?: number | null | undefined;
      ownerGainedTime?: number | null | undefined;
      listing?: number | null | undefined;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  occupationDetailsForm: {
    model: {
      householdIncome: HouseholdIncome | null;
      occupation: string | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
}

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    profile: null,
    searchPosts: [],
    profilePosts:[],
    posts:[],
    time: 0,
    accountDetailsForm: {
      model: {
        displayName: null,
        email: null,
        photoURL: null,
        password: null,
        bio: '',
      },
      dirty: false,
      status: '',
      errors: {},
    },
    addressDetailsForm: {
      model: {
        residentialArea: null,
        workArea: null,
      },
      dirty: false,
      status: '',
      errors: {},
    },
    contactDetailsForm: {
      model: {
        cellphone: null,
      },
      dirty: false,
      status: '',
      errors: {},
    },
    personalDetailsForm: {
      model: {
        age: null,
        gender: null,
        ethnicity: null,
      },
      dirty: false,
      status: '',
      errors: {},
    },
    postDetailsForm: {
      model: {
        postID: null,
        createdBy: null,
        ownedBy: null,
        likes: null, //fixed like left out  before
        comments: null,
        createdAt: null,
        content: null,
        hashtag: null,
        caption: null,
        totalTime: 0,
        ownerGainedTime: 0,
        listing: null,
      },
      dirty: false,
      status: '',
      errors: {},
    },
    occupationDetailsForm: {
      model: {
        householdIncome: null,
        occupation: null,
      },
      dirty: false,
      status: '',
      errors: {},
    },
  },
})
@Injectable()
export class ProfileState {
  constructor(
    private readonly profileApi: ProfilesApi,
    private readonly store: Store
  ) { }

  @Selector()
  static profile(state: ProfileStateModel) {
    return state.profile;
  }

  @Action(Logout)
  async logout(ctx: StateContext<ProfileStateModel>) {
    return ctx.dispatch(new AuthLogout());
  }

  @Action(SubscribeToProfile)
  subscribeToProfile(ctx: StateContext<ProfileStateModel>) {
    const user = this.store.selectSnapshot(AuthState.user);
    if (!user) return ctx.dispatch(new SetError('User not set'));

    return this.profileApi
      .profile$(user.uid)
      .pipe(tap((profile: IProfile) => ctx.dispatch(new SetProfile(profile))));
  }

  @Action(SetProfile)
  setProfile(ctx: StateContext<ProfileStateModel>, { profile }: SetProfile) {
    console.log("In SetProfile + " + JSON.stringify(this.setProfile));
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
      const bio = state.accountDetailsForm.model.bio;

      if (!userId )
        return ctx.dispatch(
          new SetError(
            'UserId  not set'
          )
        );

      const request: IUpdateAccountDetailsRequest = {
        profile: {
          userId,
          accountDetails: {
            displayName,
            email,
            password,
            bio,
          },
        },
      };
      const responseRef = await this.profileApi.updateAccountDetails(request);
      console.log("Profile State " + responseRef.data);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(CreatePostDetails)
  async createPostDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const content = state.postDetailsForm.model.content;
      const createdBy = state.profile?.userId;
      const caption = state.postDetailsForm.model.caption;
      const hashtag = state.postDetailsForm.model.hashtag;
      const ownedBy = state.profile?.userId; // We can use 'createdBy' from the action payload
      const postID = state.profile?.userId + "1";
      const likes = 0;
      const createdAt = Timestamp.now();

      if (!userId || !content || !caption || !hashtag)
        return ctx.dispatch(
          new SetError(
            'UserId or content or caption or hashtag'
          )
        );

      const request: ICreatePostRequest = {
        profile: {
          userId,
          posts: [{
            postID,
            createdBy,
            ownedBy,
            likes,
            createdAt,
            content,
            hashtag,
            caption,
          }],
        },
      };
      const responseRef = await this.profileApi.createPostDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(UpdateContactDetails)
  async updateContactDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const cellphone = state.contactDetailsForm.model.cellphone;

      if (!userId || !cellphone)
        return ctx.dispatch(new SetError('UserId or cellphone not set'));

      const request: IUpdateContactDetailsRequest = {
        profile: {
          userId,
          contactDetails: {
            cellphone,
          },
        },
      };
      const responseRef = await this.profileApi.updateContactDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(UpdateAddressDetails)
  async updateAddressDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const residentialArea = state.addressDetailsForm.model.residentialArea;
      const workArea = state.addressDetailsForm.model.workArea;

      if (!userId || !residentialArea || !workArea)
        return ctx.dispatch(
          new SetError('UserId or residential area or work area not set')
        );

      const request: IUpdateAddressDetailsRequest = {
        profile: {
          userId,
          addressDetails: {
            residentialArea,
            workArea,
          },
        },
      };
      const responseRef = await this.profileApi.updateAddressDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(UpdatePersonalDetails)
  async updatePersonalDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const age = state.personalDetailsForm.model.age;
      const gender = state.personalDetailsForm.model.gender;
      const ethnicity = state.personalDetailsForm.model.ethnicity;

      if (!userId || !age || !gender || !ethnicity)
        return ctx.dispatch(
          new SetError('UserId or age or gender or ethnicity not set')
        );

      const request: IUpdatePersonalDetailsRequest = {
        profile: {
          userId,
          personalDetails: {
            age,
            gender,
            ethnicity,
          },
        },
      };
      const responseRef = await this.profileApi.updatePersonalDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(UpdateOccupationDetails)
  async updateOccupationDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const householdIncome = state.occupationDetailsForm.model.householdIncome;
      const occupation = state.occupationDetailsForm.model.occupation;

      if (!userId || !householdIncome || !occupation)
        return ctx.dispatch(
          new SetError('UserId or householdIncome or occupation not set')
        );

      const request: IUpdateOccupationDetailsRequest = {
        profile: {
          userId,
          occupationDetails: {
            householdIncome,
            occupation,
          },
        },
      };
      const responseRef = await this.profileApi.updateOccupationDetails(
        request
      );
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(CreateNewPost)
  async addPost(ctx: StateContext<ProfileStateModel>, { post }: CreateNewPost) {
    console.log("In state AddPost " + post.content);
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const content = post.content;
      const createdBy = state.profile?.userId;
      const caption = state.postDetailsForm.model.caption;
      const hashtag = state.postDetailsForm.model.hashtag;
      const listing = state.postDetailsForm.model.listing;
      const ownedBy = state.profile?.userId; // We can use 'createdBy' from the action payload
      const postID = state.profile?.accountDetails?.displayName?.split("@")[0] + "-" + state.profile?.posts?.length;
      const likes = state.postDetailsForm.model.likes;
      const createdAt = Timestamp.now();

      if (!userId || !content || !caption || !hashtag)
        return ctx.dispatch(
          new SetError(
            'UserId or content or caption or hashtag not set'
          )
        );

      const details: IPostDetails = {
        postID,
        createdBy,
        ownedBy,
        likes,
        createdAt,
        content,
        hashtag,
        caption,
        listing,
      }

      const request: IAddPostRequest = {
        profile: {
          userId,
        },
        post: details

      };
      const responseRef = await this.profileApi.addPostDetails(request);
      console.log("API returned " + responseRef.data);
      const response = responseRef.data;
      return ctx.setState(
        produce((draft) => {
          if (draft.profile){
          if (!draft.profile?.posts) {
            draft.profile.posts = [];
          }
          draft.profile.posts.splice(1, 0, post);
        }
        })
      );
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
  @Selector()
  static userPosts(state: ProfileStateModel): IPostDetails[] {
    return state.posts;
  }

  @Selector()
  static searchPosts(state: ProfileStateModel): IPostDetails[] {
    return state.searchPosts;
  }

  @Selector()
  static profilePosts(state: ProfileStateModel): IPostDetails[] {
    return state.profilePosts;
  }

  @Action(FetchUserPosts)
fetchUserPosts(ctx: StateContext<ProfileStateModel>, { displayName }: FetchUserPosts) {
  return this.profileApi.getUserPostsFromFunction$(displayName).pipe(
    tap((posts: IPostDetails[]) => ctx.patchState({ searchPosts: posts })),
    catchError((error) => {
      ctx.dispatch(new SetError((error as Error).message));
      return of(null);
    })
  );
}

@Action(FetchPortfolioPosts)
fetchPortfolioPosts(ctx: StateContext<ProfileStateModel>, { userId }: FetchPortfolioPosts) {
const vard=userId;
const state=ctx.getState();
let uId=' ';
  if(state.profile?.userId){
    uId=state.profile?.userId;
  }
  return this.profileApi.getPortfolioPostsFromFunction$(uId).pipe(
    tap((posts: IPostDetails[]) => ctx.patchState({ profilePosts: posts })),
    catchError((error) => {
      ctx.dispatch(new SetError((error as Error).message));
      return of(null);
    })
  );
}

@Action(GetAllPosts)
getAllPosts(ctx: StateContext<ProfileStateModel>, { userId }: GetAllPosts) {
const userID=userId;
  const state = ctx.getState();
console.log("here in state");
  let uId=' ';
  if(state.profile?.userId){
    uId=state.profile?.userId;
  }
console.log(uId);
  return this.profileApi.getAllPosts$(uId).pipe(
    tap((posts: IPostDetails[]) => ctx.patchState({ posts: posts })),
    catchError((error) => {
      ctx.dispatch(new SetError((error as Error).message));
      return of(null);
    })
  );
  }

  @Action(GetUserPostsByHashtag)
  getUserPostsByHashtag(
    ctx: StateContext<ProfileStateModel>,
    action: GetUserPostsByHashtag
  ) {
    const state = ctx.getState();

    return this.profileApi.getUserPostsByHashtag$(action.hashtag).pipe(
      tap((posts: IPostDetails[]) => {
        if (posts.length === 0) {
          throw new Error('No posts found with the given hashtag.');
        }

        ctx.setState(
          produce(state, (draft: ProfileStateModel) => {
            draft.searchPosts = posts;
          })
        );
      }),
      catchError((error) => {
        ctx.dispatch(new SetError(error));
        return of(null);
      })
    );
  }


// @Action(BuyPost)
// buyPost(ctx: StateContext<ProfileStateModel>, {post}: BuyPost) {
// const state=ctx.getState();
// let uId=' ';
//   if(state.profile?.userId){
//     uId=state.profile?.userId;
//   }
//   const postS =post;
//   return this.profileApi.buyPost$(post,uId).pipe(
//     tap((posts: IPostDetails[]) => ctx.patchState({ posts: posts })),
//     catchError((error) => {
//       ctx.dispatch(new SetError((error as Error).message));
//       return of(null);
//     })
//   );
// }

@Action(BuyPost)
buyPost(ctx: StateContext<ProfileStateModel>, { postId }: BuyPost) {
  const buyerId = ctx.getState().profile?.userId;

  if (!buyerId || !postId) {
    return ctx.dispatch(
      new SetError('BuyerId or PostId not set')
    );
  }

  return from(
    this.profileApi.functions2.httpsCallable('buyPosts')({ postId })
  ).pipe(
    tap(() => {
      ctx.patchState({
        posts: ctx.getState().posts.map((post) =>
          post.postID === postId ? { ...post, ownedBy: buyerId } : post
        ),
      });
    }),
    catchError((error) => {
      ctx.dispatch(new SetError((error as Error).message));
      return of(null);
    })
  );
}
}
