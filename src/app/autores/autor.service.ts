import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './autor.model';
import { Genero } from './genero.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  // controller

  private url = 'http://localhost:3000/autores';
  private autores: Autor[];
                        //aqui tem q importa o servico do http pq esse arquivo é serviço
  constructor(private httpClient: HttpClient) {}

   public getAutores(): Observable<Autor[]> {                                      
     return this.httpClient.get<Autor[]>(this.url);//url json server
   }

   public delete(id: number): Observable<Object> {
     return this.httpClient.delete(`${this.url}/${id}`)
   }

   getAutor(id: number): Observable<Autor> {
     return this.httpClient.get<Autor>(`${this.url}/${id}`);
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
