import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Autor } from 'src/app/autores/autor.model';
import { AutorService } from 'src/app/autores/autor.service';
import { Livro } from '../livros.module';
import { LivroService } from '../livros.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  form : FormGroup;
  livroId: number;
  autores: Autor[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private livroService: LivroService,
      private router: Router, 
      private toastController: ToastController,
      private autorService: AutorService
    ) 
    {
      let livro = {
        id: null,
        titulo: '',
        isbn: '',
        paginas: 0,
        autor: 0,
        preco: 0,
        capa: '',
        }
      this.startForm(livro);
   }
                    // validacoes
  startForm(livro: Livro) {     
    this.form = new FormGroup({
      titulo : new FormControl(livro.titulo,  [Validators.required]),
      isbn   : new FormControl(livro.isbn,    [Validators.required]),
      paginas: new FormControl(livro.paginas, [Validators.required]),
      autor  : new FormControl(livro.autor,   [Validators.required]),
      preco  : new FormControl(livro.preco,   [Validators.required]),
      capa  : new FormControl(livro.capa,     [Validators.required]),
    });  
  }

  ngOnInit() {
    this.autorService.getAutores().subscribe(autores => this.autores = autores);
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.livroId = parseInt(id);
      this.livroService.getLivro(this.livroId)
      .subscribe((response) => {
        this.startForm(response);
      });
    }
  }

  store() {
    const livro = {...this.form.value, id: this.livroId}

    this.livroService.store(livro).subscribe(
      () => this.router.navigate(['livros']),
      (error) => console.log(error)
    );
  }

  get titulo() {
    return this.form.get('titulo');
  }
}
