import { Injectable } from '@angular/core';
import { Item } from '../items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemList: Array<Item>
  constructor() { 
    this.itemList=[]
  }

  addItem(newItem: Item){
    this.itemList.push(newItem);
    console.log('Lista de items: ', this.itemList);
  }

  getAllItems():Array<Item>{
    return this.itemList;
  }
}
