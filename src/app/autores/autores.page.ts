import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
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
  constructor(private autorService: AutorService, private alertcontroller: AlertController, private toast: ToastController) { 
    this.list();
  }

  ngOnInit() {
  }

  list() {
    this.autorService.getAutores()
    .subscribe(
      (response) => { //success
        this.autores = response;
      }, 
      (response) => {
        console.error(response);
      } // error
    );
  }
  
  private remove (autor: Autor) {
    this.autorService.delete(autor.id).subscribe(
      () => {},
      (response) => {
        this.toast.create({
          message: 'Não foi possível excluir o autor.',
          color: 'danger',
          duration: 3000,
          keyboardClose: true
        }).then(t => t.present());
      }
    );
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

  ionViewWillEnter() {
    this.list();
  }
}
