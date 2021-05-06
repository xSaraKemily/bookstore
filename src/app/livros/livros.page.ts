import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Livro } from './livros.module';
import { LivroService } from './livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

  public livros: Livro[];

  constructor(private livroService: LivroService, private alertcontroller: AlertController, private toast: ToastController){
    this.listar();
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    this.livroService.getLivros()
    .subscribe(
      (response) => { //success
        this.livros = response;
      }, 
      (response) => {
        console.error(response);
      } // error
    );
  }

  private remove (livro: Livro) {
    this.livroService.delete(livro.id).subscribe(
      () => { this.listar() },
      (response) => {
        this.toast.create({
          message: 'Não foi possível excluir o livro.',
          color: 'danger',
          duration: 3000,
          keyboardClose: true
        }).then(t => t.present());
      }
    );
  }

  confirmDelete (livro: Livro) {
    this.alertcontroller.create({
      header: 'Confirmar exclusão',
      message: `Deseja excluir o livro ${livro.titulo} ?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
           this.remove(livro)
          }
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());   
  }
}
