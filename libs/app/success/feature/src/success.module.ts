import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuccessModule as SuccessDataAccessModule } from '@mp/app/success/data-access';

@NgModule({
    imports: [CommonModule, SuccessDataAccessModule],
})
export class SuccessModule { }