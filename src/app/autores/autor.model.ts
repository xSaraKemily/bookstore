import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { Genero } from './genero.enum';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule
  ],
  declarations: [AutoresPage]
})
export class Autor {
  id?: number;
  nome: string;
  dataNascimento: Date;
  genero: Genero;
}
