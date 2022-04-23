import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisClasesComponent } from './componentes/mis-clases/mis-clases.component';
import { LoginComponent } from './componentes/login/login.component';
import { EvidenciasVaciaComponent } from './componentes/evidencias-vacia/evidencias-vacia.component';
import { EvidenciasAsignaturaComponent } from './componentes/evidencias-asignatura/evidencias-asignatura.component';
import { NuevaEvidenciaComponent } from './componentes/nueva-evidencia/nueva-evidencia.component';
import { EvidenciasCoordinacionComponent } from './componentes/evidencias-coordinacion/evidencias-coordinacion.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ActasComponent } from './componentes/actas/actas.component';

const routes: Routes = [
  {path: 'clases', component: MisClasesComponent},
  {path: '', component: LoginComponent},
  {path: 'sin_evidencias', component: EvidenciasVaciaComponent},
  {path: 'clases/evidencias_asignatura', component: EvidenciasAsignaturaComponent},
  {path: 'nueva_evidencia', component: NuevaEvidenciaComponent},
  {path: 'evidencias_coordinacion', component: EvidenciasCoordinacionComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: 'actas', component: ActasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
