import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MemoryCardComponent } from './memory-card/memory-card.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [MemoryCardComponent],
  exports: [MemoryCardComponent]
})
export class SharedModule {}
