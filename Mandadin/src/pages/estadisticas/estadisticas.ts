import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProductoModel, ProductoDataModel } from '../../models/models';

/**
 * Generated class for the Estadisticas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class Estadisticas {
  public compras: ProductoDataModel[];

  constructor(public navCtrl: NavController,
              public storage: Storage) {
    this.storage.get('compras').then((data) => {
      // this.compras = data;
      var sumatoria = 0;
      var productos;
      var prodNuevo = [];

      for (var i = 0; i<data.length; i++) {
        
        if (i == 0) {
          sumatoria += parseInt(data[i].precio);
          productos = [{nombre: data[i].nombre, precio: data[i].precio, fecha: data[i].fecha}];
        }
        else {
          var diaRef1 = new Date(data[i].fecha.replace(" ", "T"));
          var dia1 = diaRef1.getDate();
          var mes1 = diaRef1.getMonth() +1;
          var anio1 = diaRef1.getFullYear();

          var diaRef2 = new Date(data[i-1].fecha.replace(" ", "T"));
          var dia2 = diaRef2.getDate();
          var mes2 = diaRef2.getMonth() +1;
          var anio2 = diaRef2.getFullYear();

          if (dia1 == dia2 && mes1 == mes2 && anio1 == anio2) {
            productos.push({nombre: data[i].nombre, precio: data[i].precio, fecha: data[i].fecha});
            sumatoria += parseInt(data[i].precio);
          }
          else {
            prodNuevo.push( {
                sumatoria: sumatoria,
                productos: 
                [
                  productos
                ]
              }
            )

            productos = [];
            sumatoria = parseInt(data[i].precio);
          }
        }
        if (i == data.length -1) {
          prodNuevo.push( {
              sumatoria: sumatoria,
              productos: 
              [
                productos
              ]
            }
          )
        }
      }
      this.compras = prodNuevo;
    });
  }

}
