import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'cadastro/:id',
    component: CadastroComponent
  },
  {
    path: 'edicao/:id',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
