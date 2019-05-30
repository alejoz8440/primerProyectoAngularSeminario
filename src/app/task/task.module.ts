import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { SearchModule } from '../search/search.module';
import { ItemListModule } from '../item-list/item-list.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    SearchModule,
    ItemListModule
  ],
  exports:[TaskComponent]
})
export class TaskModule { }
