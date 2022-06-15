import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Clase } from 'src/app/modelos/clase';
import { CargadorService } from 'src/app/servicios/cargador.service';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { DialogoCerrarComponent } from '../dialogo-cerrar/dialogo-cerrar.component';

@Component({
  selector: 'app-mis-clases',
  templateUrl: './mis-clases.component.html',
  styleUrls: ['./mis-clases.component.scss']
})
export class MisClasesComponent implements OnInit {
  mis_clases: Clase[] = [];
  profesor: string = "";
  titulacion: string = "";
  codigo: string = "";

  cargando: boolean = true;

  constructor(private api: ServiciosApiService, private router: Router, public cargador: CargadorService, private route: ActivatedRoute, private dialogo: MatDialog) { }

  cerrar_sesion(drawer: MatDrawer){
    drawer.toggle();
    this.dialogo.open(DialogoCerrarComponent);
  }

  ver_evidencias(nombre_asignatura: string){
    this.cargando = true
      this.api.get_info_asignatura(nombre_asignatura).subscribe(clase =>{
        let respuesta_evidencias = this.api.get_evidencias(clase.titulacion, clase.nombre_completo, clase.cod_asigna)
        respuesta_evidencias.subscribe(evidencias =>{
          if (evidencias.evidencias.length == 0){
            this.cargando = true;
            this.router.navigateByUrl('/sin_evidencias/' + this.profesor + "/" + nombre_asignatura)
            this.cargando = false
          }else{
            this.cargando = true
            this.router.navigateByUrl('/clases/evidencias_asignatura/' + this.profesor + "/" + nombre_asignatura)
            this.cargando = false
          }
      })

    })
  }

  ngOnInit(): void {
    this.profesor = this.route.snapshot.params['usuario']
    this.cargando = true;
    let respuesta = this.api.get_clases(this.profesor)
    respuesta.subscribe(clases =>{
      clases.asignaturas.forEach(clase => {
        this.mis_clases.push(clase)    
      });
      this.cargando = false;
    });
  }

}
