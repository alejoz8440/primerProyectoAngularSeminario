import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/model/items.model';
import { ItemsService } from 'src/app/shared/model/services/items.service';

@Component({
  selector: 'app-item-inactive',
  templateUrl: './item-inactive.component.html',
  styleUrls: ['./item-inactive.component.scss']
})
export class ItemInactiveComponent implements OnInit {

  item:Item;
  itemListInactive:Array<Item>;

  constructor(private itemService: ItemsService) {
    this.item = new Item();
  }

  ngOnInit() {
    this.itemListInactive= this.itemService.getAllItemsInactive();
  }

  agregarItemInactivo(){
    this.itemService.addItemInactive(this.item);
    this.item = new Item();
    
  }

  listaInicialInactiva=[
    {label:'Escuchar Musica'},
    {label:'Jugar VideoJuegos'},
    
  ]
}
