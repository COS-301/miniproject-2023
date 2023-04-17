import { Injectable } from '@angular/core';
import { SetError } from '@mp/app/errors/util';
import { SendForgotEmail as ForgotAuth, ConfirmPasswordCode as CodeAuth } from '@mp/app/auth/util';
import { Action, State, StateContext } from '@ngxs/store';
import { ForgotPassword, SendConfirmCode } from '@mp/app/forgot/util';
import { SetSuccess } from '@mp/app/success/util';

// utils

export interface ForgotStateModel {
    forgotForm: {
        model: {
            email: string | null
        };
        dirty: false;
        status: string;
        errors: object;
    };
    confirmForm: {
        model: {
            code: string | null;
            password: string | null;
        };
        dirty: false;
        status: string;
        errors: object;
    }
}

@State<ForgotStateModel>({
    name: 'forgot',
    defaults: {
        forgotForm: {
            model: {
                email: null
            },
            dirty: false,
            status: '',
            errors: {}
        },
        confirmForm: {
            model: {
                code: null,
                password: null
            },
            dirty: false,
            status: '',
            errors: {}
        }
    },
})

@Injectable()
export class ForgotState {
    @Action(ForgotPassword)
    async sendRequest(ctx: StateContext<ForgotStateModel>) {
        try {
            const state = ctx.getState();
            const email = state.forgotForm.model.email;
            console.log(email);
            if (email) {
                ctx.dispatch(new ForgotAuth(email));
                return ctx.dispatch(new SetSuccess(`Email send successfully. Please check ${email} for the reset password link.`));
            }
            return ctx.dispatch(new SetError('Email not set'));
        } catch (error) {
            return ctx.dispatch(new SetError((error as Error).message));
        }
    }

    @Action(SendConfirmCode)
    async sendCode(ctx: StateContext<ForgotStateModel>) {
        try {
            const state = ctx.getState();
            const code = state.confirmForm.model.code;
            const password = state.confirmForm.model.password;

            if (code && password) {
                return ctx.dispatch(new CodeAuth(code, password));
            }

            return ctx.dispatch(new SetError('Code and password not'));
        } catch (error) {
            return ctx.dispatch(new SetError((error as Error).message));
        }
    }
}