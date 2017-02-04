import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AgregarListaPage } from '../pages/agregar-lista/agregar-lista';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';

import { Global } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarListaPage,
    EstadisticasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarListaPage,
    EstadisticasPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    Global
  ]
})
export class AppModule {}
