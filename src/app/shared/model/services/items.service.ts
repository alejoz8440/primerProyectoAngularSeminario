import { Injectable } from '@angular/core';
import { Item } from '../items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemList: Array<Item>
  itemListInactive:Array<Item>
  constructor() { 
    this.itemList=[],
    this.itemListInactive=[]
  }

  addItem(newItem: Item){
    this.itemList.push(newItem);
    console.log('Lista de items: ', this.itemList);
  }
  addItemInactive(newItemInactive: Item){
    this.itemListInactive.push(newItemInactive);
    console.log('Lista de items: ', this.itemListInactive);
  }

  getAllItems():Array<Item>{
    return this.itemList;
  }

  getAllItemsInactive():Array<Item>{
    return this.itemListInactive;
  }
}
