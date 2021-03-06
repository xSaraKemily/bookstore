import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { Genero } from './genero.enum';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AutoresPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AutoresPage, AutoresCadastroComponent]
})

// model

export class Autor {
  id?: number;
  nome: string;
  dataNascimento: Date;
  genero: Genero;
}