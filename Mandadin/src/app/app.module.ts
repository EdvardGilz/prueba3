import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { AgregarLista } from '../pages/agregar-lista/agregar-lista';
import { Estadisticas } from '../pages/estadisticas/estadisticas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Global } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarLista,
    Estadisticas
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarLista,
    Estadisticas
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Global
  ]
})
export class AppModule {}
