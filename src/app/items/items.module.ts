import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemInactiveComponent } from './item-inactive/item-inactive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemComponent, ItemInactiveComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ItemComponent,ItemInactiveComponent]
})
export class ItemsModule { }
