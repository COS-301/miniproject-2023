import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { IProfile } from "@mp/api/profiles/util"
import { Injectable } from '@angular/core';

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
}
