import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { generate } from 'rxjs';
import { Autor } from '../autor.model';
import { AutorService } from '../autor.service';
import { Genero } from '../genero.enum';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {

  form : FormGroup;
  autorId: number;

  constructor(private activatedRoute: ActivatedRoute, private autorService: AutorService, private router: Router) {
    let autor = {
        id: null,
        nome: '',
        dataNascimento: null,
        genero: Genero.FEMININO
      }
    this.startForm(autor);
  }

  startForm(autor: Autor) {
    this.form = new FormGroup({
      nome: new FormControl(autor.nome, [Validators.required, Validators.minLength(3)]),
      dataNascimento:new FormControl(autor.dataNascimento, [Validators.required]),
      genero: new FormControl(autor.genero, [Validators.required]),
    });
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.autorService.getAutor(id)
    .subscribe((response) => {
      this.startForm(response);
    });

    this.autorId = id;
  }

  store() {
    const autor = {...this.form.value, id: this.autorId}
    this.autorService.store(autor);
    this.router.navigate(['autores']);
  }

  get nome() {
    return this.form.get('nome');
  }

}
