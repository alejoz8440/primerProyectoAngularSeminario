import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-inactive',
  templateUrl: './item-inactive.component.html',
  styleUrls: ['./item-inactive.component.scss']
})
export class ItemInactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaInicialInactiva=[
    {label:'Escuchar Musica'},
    {label:'Jugar VideoJuegos'},
    
  ]
}
