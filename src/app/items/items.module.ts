import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveItemsComponent } from './active-items/active-items.component';
import { InactiveItemsComponent } from './inactive-items/inactive-items.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { InactiveListComponent } from './inactive-list/inactive-list.component';

@NgModule({
  declarations: [ActiveItemsComponent, InactiveItemsComponent, ActiveListComponent, InactiveListComponent],
  imports: [
    CommonModule
  ],
  exports:[ActiveItemsComponent,InactiveItemsComponent,InactiveListComponent,ActiveListComponent]
})
export class ItemsModule { }
