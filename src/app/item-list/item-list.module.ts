import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveListComponent } from './inactive-list/inactive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { ItemsModule } from '../items/items.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InactiveListComponent, ActiveListComponent],
  imports: [
    CommonModule,
    ItemsModule,
    FormsModule
  ],
  exports:[InactiveListComponent,ActiveListComponent]
})
export class ItemListModule { }
