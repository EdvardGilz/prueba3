import { Injectable } from '@angular/core';

/*
  Generated class for the Global provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Global {
  public primeraVez = 0;

  constructor() {
  }

  setPrimeraVez() {
    this.primeraVez = 1;
  }
  
  getPrimeraVez() {
    return this.primeraVez;
  }
  
  resetPrimeraVez() {
    this.primeraVez = 0;
  }
  
  agregarCero(valor) {
    if (valor <= 9) {
      valor = "0" + valor;
    }
    return valor;
  }

}
