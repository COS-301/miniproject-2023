import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search.page';
import { SearchPageRouting } from './search-page.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    SearchPageRouting,
    IonicModule
  ],
  declarations: [SearchPageComponent],
})
export class SearchPageModule {}
