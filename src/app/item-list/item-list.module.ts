import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveListComponent } from './inactive-list/inactive-list.component';
import { ActiveListComponent } from './active-list/active-list.component';

@NgModule({
  declarations: [InactiveListComponent, ActiveListComponent],
  imports: [
    CommonModule
  ]
})
export class ItemListModule { }
