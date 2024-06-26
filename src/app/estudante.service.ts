import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Estudante = {
  nome: string,
  matricula: string,
  data_nascimento: string,
  email: string
}


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {
  url = "http://127.0.0.1:3000/estudante"
  constructor(
    private http: HttpClient
  ) { }

  save(dados: any) {
    return this.http.post(this.url, dados)
  }
}
