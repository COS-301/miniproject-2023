import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchPage } from './search.page';
import { SearchRouting } from './search.routing';
import { FooterModule } from '@mp/app/footer/feature';

@NgModule({
  imports:[CommonModule, IonicModule, SearchRouting, FooterModule],
  declarations: [SearchPage],
})
export class SearchModule{}