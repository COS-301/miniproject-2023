import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'ms-forget-page',
    templateUrl: './forgot.page.html',
    styleUrls: ['./forgot.page.scss']
})

export class ForgotPage {
    constructor(
        private readonly gb: FormBuilder,
        private readonly store: Store
    ) { }
}