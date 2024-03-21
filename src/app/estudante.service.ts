import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
