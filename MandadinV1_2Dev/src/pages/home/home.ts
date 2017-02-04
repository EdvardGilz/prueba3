import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { AdMob } from 'ionic-native';

import { Global } from '../../providers/global';

import { ProductoModel, ProductoDataModel } from '../../models/models';

import { AgregarListaPage } from '../agregar-lista/agregar-lista';
import { EstadisticasPage } from '../estadisticas/estadisticas';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public listaVacia: number;
  public productos: ProductoDataModel[] = [];
  public productosCompras: ProductoDataModel[] = [];
  public productosTemp: ProductoModel;
  public fecha: string;
  public compras: boolean = false;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public global: Global) {}
  
  ionViewWillEnter() {
    // AdMob.prepareInterstitial({
    //   adId: 'ca-app-pub-1057257651261369/4329197537',
    //   isTesting: true,
    //   autoShow: false
    // });

    // AdMob.createBanner({
    //   adId: 'ca-app-pub-1057257651261369/2514387137',
    //   isTesting: true,
    //   autoShow: true,
    //   position: 'TOP_CENTER'
    // });

    this.storage.get('lista').then((data) => {
      if (data == null) {
        this.listaVacia = 0;
      }
      else {
        for (var i in data) {
          data[i].activo = false;
        }
        this.listaVacia = 1;
        this.productos = data;
      }
    })
    .then(() => {
      this.verificarListaVacia();
    });
    
    this.verificarCompras();
  }

  obtenerFecha() {
    var hoy = new Date();
    
    var dia = this.global.agregarCero(hoy.getDate());
    var mes = this.global.agregarCero(hoy.getMonth() +1);
    var anio = this.global.agregarCero(hoy.getFullYear());
    var hora = this.global.agregarCero(hoy.getHours());
    var minuto = this.global.agregarCero(hoy.getMinutes());
    var segundo = this.global.agregarCero(hoy.getSeconds());
    
    this.fecha = anio + "-" + mes + "-" + dia + " " + hora + ":" + minuto + ":" + segundo;
  }
  
  agregarItems() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando lista'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(AgregarListaPage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
    
  }
  
  deleteProd(index) {
    var nombre = this.productos[index].nombre;
    
    this.storage.get('productList').then((data) => {
      for (var i in data) {
        for (var j in data[i].productos)
          if (data[i].productos[j].nombre == nombre) {
            data[i].productos[j].activo = false;
          }
      }
      this.productosTemp = data;
    })
    .then(() => {
      this.storage.remove('productList');
      this.storage.set('productList', this.productosTemp);
    });
    
    this.productos.splice(index, 1);
    this.storage.set('lista', this.productos);
    
    
    this.verificarListaVacia();
  }
  
  verificarListaVacia() {
    if (this.productos.length == 0) {
      this.listaVacia = 0;
      this.storage.remove('lista');
    }
  }
  
  archivar(index) {
    let prompt = this.alertCtrl.create({
      title: this.productos[index].nombre,
      message: "¿Cuanto te costó?",
      inputs: [
        {
          name: 'costo',
          placeholder: '$0.00',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.productos[index].activo = false;
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            if (data.costo == "") {
              this.productos[index].activo = false;
            }
            else {
              this.obtenerFecha();
              this.productos[index].precio = data.costo;
              this.productos[index].fecha = this.fecha;
              this.guardarCompras(index);
            }
          }
        }
      ]
    });
    prompt.present();
    
  }
  
  guardarCompras(index) {
    this.storage.get('compras').then((data) => {
      if (data == null) {
        this.productosCompras.unshift(this.productos[index]);
        this.storage.set('compras', this.productosCompras);
      }
      else {
        this.productosCompras = data;
        this.productosCompras.unshift(this.productos[index]);
        this.storage.set('compras', this.productosCompras);
      }
    })
    .then(() => {
      this.deleteProd(index);
      this.verificarCompras();
    });
  }
  
  verificarCompras() {
    this.storage.get('compras').then((data) => {
      if (data == null) {
        this.compras = false;
      }
      else {
        this.compras = true;
      }
    });
  }
  
  verData() {
    // AdMob.showInterstitial();
    this.navCtrl.push(EstadisticasPage);
  }

  eliminar() {
    this.storage.clear();
  }
}
