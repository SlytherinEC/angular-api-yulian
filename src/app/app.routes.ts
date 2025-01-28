import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioEdicionComponent } from './formulario-edicion/formulario-edicion.component';

export const routes: Routes = [
    { path: 'listado', component: ListadoComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'editar-caza/:id', component: FormularioEdicionComponent}
];
