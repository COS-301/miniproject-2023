import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AddMemoryPageComponent } from './add-memory/add-memory.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [
    AddMemoryPageComponent
  ]
})
export class SharedModule {}
