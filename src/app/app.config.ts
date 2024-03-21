import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EstudanteComponent } from './estudante/estudante.component';
import { EstagioComponent } from './estagio/estagio.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), EstudanteComponent, EstagioComponent]
};
