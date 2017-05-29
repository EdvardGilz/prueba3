import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarLista } from './agregar-lista';

@NgModule({
  declarations: [
    AgregarLista,
  ],
  imports: [
    IonicPageModule.forChild(AgregarLista),
  ],
  exports: [
    AgregarLista
  ]
})
export class AgregarListaModule {}
