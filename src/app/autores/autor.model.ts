import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { Genero } from './genero.enum';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AutoresPageRoutingModule,
  ],
  declarations: [AutoresPage, AutoresCadastroComponent]
})

// model

export class Autor {
  id?: number;
  nome: string;
  dataNascimento: Date;
  genero: Genero;

  // constructor (id: number,nome: string, data: Date, genero: Genero) {
  //   this.id    = 1;
  //   this.nome   = nome; 
  //   this.dataNascimento   = data;
  //   this.genero = genero
  // }
}