import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveListComponent } from './inactive-list/inactive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { ItemsModule } from '../items/items.module';

@NgModule({
  declarations: [InactiveListComponent, ActiveListComponent],
  imports: [
    CommonModule,
    ItemsModule
  ],
  exports:[InactiveListComponent,ActiveListComponent]
})
export class ItemListModule { }
