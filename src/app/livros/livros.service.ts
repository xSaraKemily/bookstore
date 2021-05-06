import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livros.module';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  // controller

  private url = 'http://localhost:3000/livros';
  private livors: Livro[];
                        //aqui tem q importa o servico do http pq esse arquivo é serviço
  constructor(private httpClient: HttpClient) {}

   public getLivros(): Observable<Livro[]> {                                      
     return this.httpClient.get<Livro[]>(this.url);//url json server
   }

   public delete(id: number): Observable<Object> {
     return this.httpClient.delete(`${this.url}/${id}`)
   }

   getLivro(id: number): Observable<Livro> {
     return this.httpClient.get<Livro>(`${this.url}/${id}`);
   }
   
   private update(livro: Livro) {
     return this.httpClient.put(`${this.url}/${livro.id}`, livro);
   }

   store(livro: Livro) {
     if(livro.id) {
       return this.update(livro);
     } else {
      return this.httpClient.post(this.url, livro);
     }
   } 
}
