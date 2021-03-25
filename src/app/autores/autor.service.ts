import { Injectable } from '@angular/core';
import { Autor } from './autor.model';
import { Genero } from './genero.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  // controller

  private autores: Autor[];

  constructor() {
   }

   public getAutores(): Autor[] {
     return this.autores;
   }

   // filter pega todos (nesse caso retorna todos menos o que tem o id dado)
   public delete(id: number) {
     this.autores = this.autores.filter(a => a.id !== id);
   }

   // o find retorna o primeiro q encontrar igual
   getAutor(id: number) {
     return this.autores.find(a => a.id === id);
   }

}
