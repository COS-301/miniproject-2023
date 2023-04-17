import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchPage } from './search.page';
import { SearchRouting } from './search.routing';
import { TimerModule } from '@mp/app/timer/feature';

@NgModule({
  imports: [CommonModule, IonicModule, SearchRouting, TimerModule],
  declarations: [SearchPage],
})
export class SearchModule { }
