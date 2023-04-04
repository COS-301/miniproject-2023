import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ForgotPassword, SendConfirmCode } from '@mp/app/forgot/util';

@Component({
    selector: 'ms-forget-page',
    templateUrl: './forgot.page.html',
    styleUrls: ['./forgot.page.scss']
})

export class ForgotPage {
    @Select(actionsExecuting([ForgotPassword, SendConfirmCode])) busy$!: Observable<ActionsExecuting>;

    forgotForm = this.fb.group({
        email: ['', [Validators.email, Validators.minLength(6), Validators.maxLength(64)]]
    });
    confirmForm = this.fb2.group({
        code: ['', []],
        password: ['', [Validators.minLength(6), Validators.maxLength(64)]],
    })

    showPassword = false;
    showCode = false;

    get email() {
        return this.forgotForm.get('email');
    }

    get code() {
        return this.confirmForm.get('code');
    }

    get password() {
        return this.confirmForm.get('password');
    }

    get emailError(): string {
        if (this.email?.errors?.['email']) return 'Email is invalid';
        if (this.email?.errors?.['required']) return 'Email is required';
        if (this.email?.errors?.['minlength'])
            return 'Email should be longer than 6 characters';
        if (this.email?.errors?.['maxlength'])
            return 'Email should be shorter than 64 characters';

        return 'Email is invalid';
    }

    get passwordError(): string {
        if (this.password?.errors?.['required']) return 'Password is required';
        if (this.password?.errors?.['minlength'])
            return 'Password should be longer than 6 characters';
        if (this.password?.errors?.['maxlength'])
            return 'Password should be shorter than 64 characters';

        return 'Password is invalid';
    }

    get codeError(): string {
        if (this.code?.errors?.['required']) return 'Code is required';
        return 'Code is invalid';
    }

    constructor(
        private readonly fb: FormBuilder,
        private readonly fb2: FormBuilder,
        private readonly store: Store
    ) { }

    sendForget() {
        console.log("send code");
        if (this.forgotForm.valid) {
            this.store.dispatch(new ForgotPassword());
        }
    }

    sendCode() {
        console.log("validate code");
        // if (this.confirmForm.valid) {
        //     this.store.dispatch(new SendConfirmCode());
        // }
    }

}