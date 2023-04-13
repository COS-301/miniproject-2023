import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SetSuccess } from '@mp/app/success/util';
import { Action, State, StateContext } from '@ngxs/store';
import produce from 'immer';

export interface SuccessStateModel {
    message: string | null;
}

@State<SuccessStateModel>({
    name: 'success',
    defaults: {
        message: null,
    },
})

@Injectable()
export class SuccessState {
    constructor(private readonly toastController: ToastController) { }

    @Action(SetSuccess)
    async setSuccess(ctx: StateContext<SuccessStateModel>, { message }: SetSuccess) {
        if (!message) return;

        ctx.setState(
            produce((draft) => {
                draft.message = message;
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