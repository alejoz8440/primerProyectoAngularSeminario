import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nro1: number;
  nro2: number;
  result: number;
  operacion: operacionEnum;

  opcionesOperacion= [
    {value: operacionEnum.Sumar, label:'Sumar'},
    {value: operacionEnum.Restar, label:'Restar'},
    {value: operacionEnum.Multiplicar, label:'Multiplicar'},
  ];

  resolverOperacion() {
    switch (this.operacion) {
      case operacionEnum.Sumar:
        this.result = this.nro1 + this.nro2;
        break;
      case operacionEnum.Restar:
        this.result = this.nro1 - this.nro2;
        break;
      case operacionEnum.Multiplicar:
        this.result = this.nro1 * this.nro2;
        break;
    }
  }

}

enum operacionEnum {
  Sumar = "0",
  Restar = "1",
  Multiplicar = "2"
}