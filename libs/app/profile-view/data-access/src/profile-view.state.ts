import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { IProfile, IGetProfileRequest } from "@mp/api/profiles/util"
import { GetProfileRequest } from "@mp/app/profile-view/util"
import { Injectable } from '@angular/core';
import { AuthState } from '@mp/app/auth/data-access';
import { SetError } from '@mp/app/errors/util';

export interface ProfileViewStateModel {
    profile: IProfile | null;
}

@State<ProfileViewStateModel>({
    name: 'profileView',
    defaults: {
        profile: null
    },
})

@Injectable()
export class ProfileViewState {
    constructor(
        // private readonly profileViewApi: ProfileViewApi
        private readonly store: Store
    ){}

    @Selector()
    static profileView(state: ProfileViewStateModel) {
        return state.profile;
    }

    // @Action(GetProfileRequest)
    // async getProfileRequest(ctx: StateContext<ProfileViewStateModel>) {
    //     try {
    //         const state = ctx.getState();
    //         const userId = state.profile?.userId;
    //         const username = state.profile?.user?.username;
    //     }
    // }
}
