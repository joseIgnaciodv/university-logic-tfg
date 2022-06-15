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
import { InformesComponent } from './componentes/informes/informes.component';
import { AdminAsignaturasComponent } from './componentes/admin-asignaturas/admin-asignaturas.component';
import { AdminUsuariosComponent } from './componentes/admin-usuarios/admin-usuarios.component';
import { VisualizarQrComponent } from './componentes/visualizar-qr/visualizar-qr.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PerfilCoordinadorComponent } from './componentes/perfil-coordinador/perfil-coordinador.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'clases/:usuario', component: MisClasesComponent},
  {path: "perfil/:usuario", component: PerfilComponent},
  {path: "perfil_coordinador/:usuario", component: PerfilCoordinadorComponent},
  {path: 'sin_evidencias/:usuario/:asignatura', component: EvidenciasVaciaComponent},
  {path: 'clases/evidencias_asignatura/:usuario/:asignatura', component: EvidenciasAsignaturaComponent},
  {path: 'nueva_evidencia/:usuario/:asignatura', component: NuevaEvidenciaComponent},
  {path: 'evidencias_coordinacion/:usuario', component: EvidenciasCoordinacionComponent},
  {path: 'estadisticas/:usuario', component: EstadisticasComponent},
  {path: 'actas/:usuario', component: ActasComponent},
  {path: 'informes/:usuario', component: InformesComponent},
  {path: 'admin_asignaturas/:usuario', component: AdminAsignaturasComponent},
  {path: 'admin_usuarios/:usuario', component: AdminUsuariosComponent},
  {path: 'visualizar_qr/:usuario/:nombre_fichero/:url', component: VisualizarQrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
