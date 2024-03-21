import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  constructor(
    private router: Router
  ) {}

  enviarEstudante() {
    this.router.navigateByUrl('estudante');
  }

  enviarEstagio() {
    this.router.navigateByUrl('estagio');
  }
}
