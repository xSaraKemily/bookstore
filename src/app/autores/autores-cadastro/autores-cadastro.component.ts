import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  autor: Autor;
  form : FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private autorService: AutorService) {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id) {
      this.autor = this.autorService.getAutor(id);
    } else {
      // this.autor = new Autor(null, '', null, Genero.FEMININO);
      this.autor = {
        id: null,
        nome: '',
        dataNascimento: null,
        genero: Genero.FEMININO
      }
    }

    this.form = new FormGroup({
      nome: new FormControl('')
    });
  }

  ngOnInit() {}

  salvar() {
    console.log(this.form.value)
  }

}
