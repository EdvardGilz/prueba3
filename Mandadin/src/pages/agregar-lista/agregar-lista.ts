import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Global } from '../../providers/global';

import { ProductoModel } from '../../models/models';

import { HomePage } from '../home/home';

/**
 * Generated class for the AgregarLista page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-agregar-lista',
  templateUrl: 'agregar-lista.html',
})
export class AgregarLista {
  public productosData: ProductoModel;
  public productosDataBK: ProductoModel;
  public listaProductos: ProductoModel[];
  public buttonDisabled: boolean = true;
  public busqueda;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public global: Global,
              public platform: Platform) {
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.storage.get('productList').then((data) => {
        this.productosData = data;
      })
      .then(() => {
        // AdMob.createBanner({
        //   adId: 'ca-app-pub-1057257651261369/2514387137',
        //   isTesting: false,
        //   autoShow: true,
        //   position: 'TOP_CENTER'
        // });
      });
    });
  }
  
  agregar() {
    this.listaProductos = [];
    
    this.storage.get('productList').then((data) => {
      this.productosData = data;
    })
    .then(() => {
      for (var i in this.productosData) {
        for (var j in this.productosData[i].productos) {
          if (this.productosData[i].productos[j].activo == true) {
            this.listaProductos.push(this.productosData[i].productos[j]);
          }
        }
      }
      
      if (this.listaProductos.length > 0) {
        this.storage.set('lista', this.listaProductos);
      }
      
      this.navCtrl.setRoot(HomePage);
    });
  }
  
  verificaVacio(producto) {
    
    this.storage.get('productList').then((data) => {
      this.productosDataBK = data;
      
      for (var i in this.productosDataBK) {
        for (var j in this.productosDataBK[i].productos) {
          if (this.productosDataBK[i].productos[j].nombre == producto.nombre) {
            this.productosDataBK[i].productos[j].activo = producto.activo;
          }
        }
      }
      
    })
    .then(() => {
      this.storage.set('productList', this.productosDataBK);
    });
    
    var res = true;
    
    for (var i in this.productosData) {
      for (var j in this.productosData[i].productos) {
        if (this.productosData[i].productos[j].activo == true) {
          res = false;
        }
      }
    }
    
    if (res == true) {
      this.storage.set('productList', this.productosData);
      this.storage.remove('lista');
    }
    
    this.buttonDisabled = res;
  }
  
  searchProduct(ev) {
    var val = ev.target.value;
    var vacio = 0;
    
    var pv = this.global.getPrimeraVez()
    if (pv == 0) {
      this.storage.get('productList').then((data) => {
        this.productosData = data;
      })
      .then(() => {
        if (val && val.trim() != '') {
          for (var i in this.productosData) {
            this.productosData[i].productos = this.productosData[i].productos.filter((item) => {
              return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            
            if (this.productosData[i].productos.length == 0) {
              this.productosData[i].visible = false;
            }
            
            if (this.productosData[i].visible == true) {
              vacio = 1;
            }
          }

          if (vacio == 0) {
            this.global.setPrimeraVez();
            this.nuevoProducto(val);
          }
        }
      });
    }
  }
  
  nuevoProducto(nombre) {
    let prompt = this.alertCtrl.create({
      title: 'Agregar un nuevo producto',
      message: "Escribe el nombre del producto que no aparece en la lista para que esté disponible",
      inputs: [
        {
          name: 'nombre',
          value: nombre
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.global.resetPrimeraVez();
          }
        },
        {
          text: 'Agregar',
          handler: data => {
            if (data.nombre != "") {
              this.global.resetPrimeraVez();
              this.agregarALista(data.nombre);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  
  agregarALista(nombre) {
    var existe = 0;
    
    this.storage.get('productList').then((data) => {
      
      if (data.length == 18) {
        var prodNuevo = {
          categoria: "Míos",
          visible: true,
          productos: 
          [
            {nombre: nombre, activo: true, eliminar: true}
          ]
        }
        data.unshift(prodNuevo);
      }
      else {
        for (var i in data[0].productos) {
          if (data[0].productos[i].nombre == nombre) {
            existe = 1;
            
            let toast = this.toastCtrl.create({
              message: 'Ese producto ya existe!!',
              duration: 3000
            });
            
            toast.present();
          }
        }
        
        if (existe == 0) {
          data[0].visible = true;
          data[0].productos.push({nombre: nombre, activo: true, eliminar: true});
        }
      }
      
      this.productosData = data;
    })
    .then(() => {
      this.storage.set('productList', this.productosData);
    })
  }

  eliminarDeLista(index) {
    var nombre = this.productosData[0].productos[index].nombre;
    var aEliminar;

    this.productosData[0].productos.splice(index, 1);
    if (this.productosData[0].productos.length <= 0) {
      this.productosData[0].visible = false;
    }
    else {
      this.productosData[0].visible = true;
    }

    this.storage.get('lista').then((data) => {
      if (data != null) {
        for (var i in data) {
          if (data[i].nombre == nombre) {
            aEliminar = i;
          }
        }

        data.splice(aEliminar, 1);
        this.listaProductos = data;
        this.storage.set('lista', this.listaProductos);
      }
    });

    this.storage.set('productList', this.productosData);
  }

}
