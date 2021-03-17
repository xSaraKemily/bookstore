import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Autor } from './autor.model';
import { AutorService } from './autor.service';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})

//esta pagian seria o js do blade (se fosse em php + laravel)
export class AutoresPage implements OnInit {

  autores: Autor[];

  // esta criando um atributo (um new)
  constructor(private autorService: AutorService, private alertcontroller: AlertController) { 
    this.list();
  }

  ngOnInit() {
  }

  list() {
    this.autores = this.autorService.getAutores();
  }
  
  private remove (autor: Autor) {
    this.autorService.delete(autor.id);
    this.list();
  }

  confirmDelete (autor: Autor) {
    this.alertcontroller.create({
      header: 'Confirmar exclusão',
      message: `Deseja excluir o autor ${autor.nome} ?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
           this.remove(autor)
          }
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());   
  }
}
