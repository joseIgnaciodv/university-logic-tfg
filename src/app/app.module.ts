import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

registerLocaleData(localeEs, 'es')

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MisClasesComponent } from './componentes/mis-clases/mis-clases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenuNavegacionComponent } from './componentes/menu-navegacion/menu-navegacion.component';
import { EvidenciasVaciaComponent } from './componentes/evidencias-vacia/evidencias-vacia.component';
import { EvidenciasAsignaturaComponent } from './componentes/evidencias-asignatura/evidencias-asignatura.component';
import { InterceptorService } from './servicios/interceptor.service';
import { NuevaEvidenciaComponent } from './componentes/nueva-evidencia/nueva-evidencia.component';
import { NavegacionCoordinadorComponent } from './componentes/navegacion-coordinador/navegacion-coordinador.component';
import { EvidenciasCoordinacionComponent } from './componentes/evidencias-coordinacion/evidencias-coordinacion.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ActasComponent } from './componentes/actas/actas.component';
import { InformesComponent } from './componentes/informes/informes.component';
import { NavAdminComponent } from './componentes/nav-admin/nav-admin.component';
import { AdminAsignaturasComponent } from './componentes/admin-asignaturas/admin-asignaturas.component';
import { AdminUsuariosComponent } from './componentes/admin-usuarios/admin-usuarios.component';
import { VisualizarQrComponent } from './componentes/visualizar-qr/visualizar-qr.component';
import { DialogoErrorComponent } from './componentes/dialogo-error/dialogo-error.component';
import { DialogoCerrarComponent } from './componentes/dialogo-cerrar/dialogo-cerrar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PerfilCoordinadorComponent } from './componentes/perfil-coordinador/perfil-coordinador.component';
import { DialogoErrorPassComponent } from './componentes/dialogo-error-pass/dialogo-error-pass.component';
import { DialogoExitoPassComponent } from './componentes/dialogo-exito-pass/dialogo-exito-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MisClasesComponent,
    MenuNavegacionComponent,
    EvidenciasVaciaComponent,
    EvidenciasAsignaturaComponent,
    NuevaEvidenciaComponent,
    NavegacionCoordinadorComponent,
    EvidenciasCoordinacionComponent,
    EstadisticasComponent,
    ActasComponent,
    InformesComponent,
    NavAdminComponent,
    AdminAsignaturasComponent,
    AdminUsuariosComponent,
    VisualizarQrComponent,
    DialogoErrorComponent,
    DialogoCerrarComponent,
    PerfilComponent,
    PerfilCoordinadorComponent,
    DialogoErrorPassComponent,
    DialogoExitoPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatChipsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatRadioModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: {color: 'primary'}},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
