import { Component } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Estudante = {
  nome: string,
  matricula: string,
  data_nascimento: string,
  email: string
}

@Component({
  selector: 'app-estudante',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './estudante.component.html',
  styleUrl: './estudante.component.scss'
})
export class EstudanteComponent {
  nome: string = '';
  matricula: string = '';
  data_nascimento: Date = new Date()
  email: string = '';

  listaItens: Estudante[] = [
    {
      nome: 'aaaa',
      matricula: "bbbbb",
      data_nascimento: "21/07/2001",
      email: "sans@gg.com"
    },
    {
      nome: 'aaaa',
      matricula: "bbbbb",
      data_nascimento: "21/07/2001",
      email: "sans@gg.com"
    },
    {
      nome: 'aaaa',
      matricula: "bbbbb",
      data_nascimento: "21/07/2001",
      email: "sans@gg.com"
    },
    {
      nome: 'aaaa',
      matricula: "bbbbb",
      data_nascimento: "21/07/2001",
      email: "sans@gg.com"
    },
    {
      nome: 'aaaa',
      matricula: "bbbbb",
      data_nascimento: "21/07/2001",
      email: "sans@gg.com"
    },
    {
      nome: 'aaaa',
      matricula: "bbbbb",
      data_nascimento: "21/07/2001",
      email: "sans@gg.com"
    },

  ]

  constructor(
    // private estudanteService: EstudanteService,
  ) {}

  onInit() {
    this.buscarLista();
  }

  buscarLista() {
    // this.estudanteService.save(dados).subscribe({
    //     next: (dados) => {
    //         listaItens = dados;
    //     },
    //     error: (error: any) => {
    //         console.log(error?.message)
    //     }
    //  })
  }
  
  save() {
    const dados = {
      nome: this.nome
    }
    // this.estudanteService.save(dados).subscribe({
    //     next: (dados) => {
    //         console.log("salvo com sucesso")
    //     },
    //     error: (error: any) => {
    //         console.log(error?.message)
    //     }
    //  })
  }

  excluir(item: Estudante) {
      console.log("deve exluir o item")
  }
  
}
