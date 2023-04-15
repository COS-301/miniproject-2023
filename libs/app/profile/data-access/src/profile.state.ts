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
  CreateNewPost
} from '@mp/app/profile/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { tap } from 'rxjs';
import { ProfilesApi } from './profiles.api';
import { Timestamp } from '@angular/fire/firestore';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileStateModel {
  profile: IProfile | null;
  accountDetailsForm: {
    model: {
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
      password: string | null;
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
    accountDetailsForm: {
      model: {
        displayName: null,
        email: null,
        photoURL: null,
        password: null,
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
        totalTime: null,
        ownerGainedTime: null,
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
            'UserId or display name or email or photo URL or password not set'
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
    console.log("In state AddPost");
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const content = state.postDetailsForm.model.content?.split(",")[1].slice(0,50);
      const createdBy = state.profile?.userId;
      const caption = state.postDetailsForm.model.caption;
      const hashtag = state.postDetailsForm.model.hashtag;
      const ownedBy = state.profile?.userId; // We can use 'createdBy' from the action payload
      const postID = state.profile?.userId + "- " + state.profile?.posts?.length;
      const likes = state.postDetailsForm.model.likes;
      const createdAt = Timestamp.now();

      if (!userId || !content || !caption || !hashtag)
        return ctx.dispatch(
          new SetError(
            'UserId or display name or email or photo URL or password not set'
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
}
