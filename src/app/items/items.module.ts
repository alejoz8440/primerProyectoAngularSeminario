import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemInactiveComponent } from './item-inactive/item-inactive.component';

@NgModule({
  declarations: [ItemComponent, ItemInactiveComponent],
  imports: [
    CommonModule
  ],
  exports:[ItemComponent,ItemInactiveComponent]
})
export class ItemsModule { }
