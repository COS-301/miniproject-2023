import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IPostList, IProfile, IUpdateRelationRequest, IRelation, RelationEnum } from '@mp/api/profiles/util';
import { SetError } from '@mp/app/errors/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { OtherUserApi } from './other-user.api';
import { UpdateRelation } from '@mp/app/other-user/util';
// import { IRelation } from 'libs/api/profiles/util/src/interfaces/relation.interface';

export interface OtherUserStateModel {
  profile: IProfile | null;
  posts: IPostList | null;
  relation: IRelation | null;
  error: string | null;
}

@State<OtherUserStateModel>({
  name: 'OtherUser',
  defaults: {
    profile: null,
    posts: null,
    relation: null,
    error: null,
  },
})
@Injectable()
export class OtherUserState {
  constructor(
    private readonly toastController: ToastController,
    private readonly store: Store,
    private readonly otherUserApi: OtherUserApi
  ) {}

  @Selector() 
  static profile(state: OtherUserStateModel) {
    return state.profile;
  }

  @Selector() 
  static posts(state: OtherUserStateModel) {
    return state.posts;
  }

  @Action(UpdateRelation)
  async updateRelation(ctx: StateContext<OtherUserStateModel>, { relation }: UpdateRelation) {
    try {
      const state = ctx.getState();
      var relType;

      // Determine what the relation type is
      if ( relation=="FRIEND")
      {
        relType = RelationEnum.FRIEND;
      }
      else if ( relation=="BLOCKED")
      {
        relType = RelationEnum.BLOCKED;
      }
      else
      {
        relType = RelationEnum.NOTFRIEND;
      }
      
      const request: IUpdateRelationRequest = {
        relation: {
          exists: true,
          type: relType,
        }
      };

      // Call api function to update the relation
      const responseRef = await this.otherUserApi.updateRelation(request);
      const response = responseRef.data;
      return ;

    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }


  @Action(SetError)
  async setError(ctx: StateContext<OtherUserStateModel>, { error }: SetError) {
    if (!error) return;

    ctx.setState(
      produce((draft) => {
        draft.error = error;
      })
    );

    const toast = await this.toastController.create({
      message: error,
      color: 'danger',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
