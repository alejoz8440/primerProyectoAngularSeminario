import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/items.model';
import { ItemsService } from 'src/app/shared/model/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item:Item;
  itemList:Array<Item>;

  constructor(private itemService:ItemsService) { 
    this.item = new Item();
  }

  ngOnInit() {
    this.itemList= this.itemService.getAllItems();
  }

  agregarItem(){
    this.itemService.addItem(this.item);
    this.item = new Item();
  }

  listaInicialActiva=[
    {label:'Confa'},
    {label:'Credibanco'},
    {label:'TIC solution'}
  ]

}
