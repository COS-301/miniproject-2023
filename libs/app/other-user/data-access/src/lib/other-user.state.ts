import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SetError } from '@mp/app/errors/util';
import { Action, State, StateContext } from '@ngxs/store';
import produce from 'immer';

export interface OtherUserStateModel {
  error: string | null;
}

@State<OtherUserStateModel>({
  name: 'OtherUser',
  defaults: {
    error: null,
  },
})
@Injectable()
export class OtherUserState {
  constructor(private readonly toastController: ToastController) {}

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
