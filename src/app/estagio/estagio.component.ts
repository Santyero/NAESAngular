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
  estudante: string = '';
  empresa: string = '';
  data_inicio: Date = new Date();
  data_termino: Date = new Date();
  carga_horaria: number = 0;

  listaItens = [
    {
      estudante: 'sim',
      empresa: 'sim2',
      data_inicio: '21/07/2001',
      data_termino: '22/07/2001',
      carga_horaria: 1
    },
    {
      estudante: 'sim',
      empresa: 'sim2',
      data_inicio: '21/07/2001',
      data_termino: '22/07/2001',
      carga_horaria: 1
    },
    {
      estudante: 'sim',
      empresa: 'sim2',
      data_inicio: '21/07/2001',
      data_termino: '22/07/2001',
      carga_horaria: 1
    },
    {
      estudante: 'sim',
      empresa: 'sim2',
      data_inicio: '21/07/2001',
      data_termino: '22/07/2001',
      carga_horaria: 1
    },
  ]
  constructor(
    // private estagioService: EstagioServiceService
  ) {}

  save() {
    // this.estagioService.get().subscribe({
    //     next: (dados) => {
    //         console.log("salvo com sucesso")
    //     },
    //     error: (error: any) => {
    //         console.log(error?.message)
    //     }
    //  })
  }

  excluir(item: any) {

  }
  
}
