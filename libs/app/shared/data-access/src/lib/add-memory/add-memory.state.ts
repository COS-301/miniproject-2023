import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { ICreateMemoryRequest, ICreateMemoryResponse } from "@mp/api/memories/util";
import { Injectable } from '@angular/core';
import { SetError } from '@mp/app/errors/util';
import { AddMemoryApi } from './add-memory.api';
/*import { 
    GetUserProfileRequest,
    SetUserView
} from '@mp/app/user-view/util';*/
//import produce from 'immer';
import { IMemory } from '@mp/api/memories/util';

export interface AddMemoryStateModel {
    memory: IMemory;
}

@State<AddMemoryStateModel>({
   
   /* name: 'userview',
    defaults: {
        userProfile: {
            user: null,
            memories: [],

            userId: '',
            accountDetails: null,
            personalDetails:null,
            contactDetails: null,
            addressDetails: null,
            occupationDetails: null,
            status: null,
            created: null,

        }
    },*/
})

@Injectable()
export class AddMemoryState {
    constructor(
        private readonly addMemoryApi: AddMemoryApi,
        private readonly store: Store
    ){}

    @Selector()
    static addMemory(state: AddMemoryStateModel) {
        //return state.userProfile;
    }

   /* @Action(GetUserProfileRequest) //GetUserProfileRequest is the same as the GetProfileRequest
    async getUserProfileRequest(ctx: StateContext<AddMemoryStateModel>, { userProfile }: AddMemoryStateModel) {
        try {
            const _userId = userProfile.userId;
            const _username = userProfile.user?.username;

            const request: IGetProfileRequest = {
                user: {
                    userId: _userId,
                    username: _username
                }
            }
            const responseRef = await this.userViewApi.getUserProfile(request);
            const response = responseRef.data;
            return ctx.dispatch(new SetUserView(response.profile));
        }
        catch(error){
            return ctx.dispatch(new SetError((error as Error).message));
        }
    }*/
}
