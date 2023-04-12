import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageComponent } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPageComponent],
  exports: [SearchPageComponent],
})
export class SearchModule { }
