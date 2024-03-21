import { Component } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudante',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './estudante.component.html',
  styleUrl: './estudante.component.scss'
})
export class EstudanteComponent {
  nome: string = '';

  constructor(
    private estudanteService: EstudanteService,
  ) {}
  
  save() {
    const dados = {
      nome: this.nome
    }
    this.estudanteService.save(dados).subscribe({
        next: (dados) => {
            console.log("salvo com sucesso")
        },
        error: (error: any) => {
            console.log(error?.message)
        }
     })
  }
  
}
