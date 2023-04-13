import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SetError, SetSuccess } from '@mp/app/errors/util';
import { Action, State, StateContext } from '@ngxs/store';
import produce from 'immer';

export interface ErrorsStateModel {
  error: string | null;
}

@State<ErrorsStateModel>({
  name: 'errors',
  defaults: {
    error: null,
  },
})
@Injectable()
export class ErrorsState {
  constructor(private readonly toastController: ToastController) { }

  @Action(SetError)
  async setError(ctx: StateContext<ErrorsStateModel>, { error }: SetError) {
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

  @Action(SetSuccess)
  async setSuccess(ctx: StateContext<ErrorsStateModel>, { message }: SetSuccess) {
    if (!message) return;

    ctx.setState(
      produce((draft) => {
        draft.error = message;
      })
    );

    const toast = await this.toastController.create({
      message: message,
      color: 'success',
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();

  }
}