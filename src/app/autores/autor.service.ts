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
    this.autores = [
      {
        id: 1,
        nome: 'David Flanagan',
        dataNascimento: new Date(1980, 11, 13),
        genero: Genero.MASCULINO,
      }, 
      {
        id: 2,
        nome: 'Douglas Cockford',
        dataNascimento: new Date(1975, 5, 17),
        genero: Genero.MASCULINO,
      },
      {
        id: 3,
        nome: 'Martin Fowler',
        dataNascimento: new Date(1960, 5, 17),
        genero: Genero.MASCULINO
      }
    ];
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

   
   private update(autor: Autor) {
     this.autores.forEach((element, index) => {
       if (element.id === autor.id) {
        this.autores[index] = autor;
       }
     })
   }

   store(autor: Autor) {
     if (autor.id) {
       this.update(autor);
     } else {
      autor.id = parseInt((Math.random() * 1000).toFixed(0));
      this.autores.push(autor);
     }
   } 
}
