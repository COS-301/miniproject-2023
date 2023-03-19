import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search.page';
import { SearchPageRouting } from './search-page.routing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchPageRouting,
    IonicModule
  ],
  declarations: [SearchPageComponent],
})
export class SearchPageModule {}
