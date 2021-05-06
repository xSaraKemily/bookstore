import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosPageRoutingModule } from './livros-routing.module';

import { LivrosPage } from './livros.page';
import { Autor } from '../autores/autor.model';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LivrosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [LivrosPage, CadastroComponent]
})

export class Livro {
  id?: number;
  titulo: string;
  isbn: string;
  paginas: number;
  autor: number;
  preco: number; //todo: nao é number
  capa: string;
}