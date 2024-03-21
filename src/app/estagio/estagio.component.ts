import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstagioServiceService } from '../estagio.service';

@Component({
  selector: 'app-estagio',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './estagio.component.html',
  styleUrl: './estagio.component.scss'
})
export class EstagioComponent {
  nome: string = '';

  constructor(
    // private estagioService: EstagioServiceService
  ) {}

  save() {
    const dados = {
      nome: this.nome
    }
    // this.estagioService.get().subscribe({
    //     next: (dados) => {
    //         console.log("salvo com sucesso")
    //     },
    //     error: (error: any) => {
    //         console.log(error?.message)
    //     }
    //  })
  }
  
}
