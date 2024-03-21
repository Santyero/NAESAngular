import { Routes } from '@angular/router';
import { EstudanteComponent } from './estudante/estudante.component';
import { EstagioComponent } from './estagio/estagio.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {
        path: 'estudante',
        component: EstudanteComponent,
    },
    {
        path: 'estagio',
        component: EstagioComponent,
    },
    {
        path: '',
        component: PrincipalComponent
    }
];
