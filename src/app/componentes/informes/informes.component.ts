import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { DialogoCerrarComponent } from '../dialogo-cerrar/dialogo-cerrar.component';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {
  cargando: boolean = true;
  usuario: string = "";
  tipo: string = "Informes";
  fecha = new Date().toLocaleString();
  asignaturas: string[] = []

  asignatura: string  = "";
  cod_asigna: string = "";
  titulacion: string = "";
  curso: string = "";
  semestre: string = "";
  escuela: string = "";
  ects: string = "";
  modalidad: string = "";
  nombre_completo: string = "";

  ord_total: string = "";
  ord_aprobados: string = "";
  ord_suspensos: string = "";
  ord_no_presentados: string = "";
  ord_sobresalientes: string = "";
  ord_notables: string = "";

  ext_total: string = "";
  ext_aprobados: string = "";
  ext_suspensos: string = "";
  ext_no_presentados: string = "";
  ext_sobresalientes: string = "";
  ext_notables: string = "";

  obs1: string = "";
  obs2: string = "";
  obs3: string = "";
  obs4: string = "";

  toggle_piea: boolean = false;
  toggle_era: boolean = false;
  toggle_res: boolean = false;
  toggle_obs: boolean = false;
  toggle_plan: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private api: ServiciosApiService, private message: MatSnackBar, private dialogo: MatDialog) { }

  cerrar_sesion(drawer: MatDrawer){
    drawer.toggle();
    this.dialogo.open(DialogoCerrarComponent);
  }
  
  get_info_asignatura(clase: string){
    this.api.get_info_asignatura(clase).subscribe(respuesta => {
      this.curso = respuesta.curso.toString();
      this.titulacion = respuesta.titulacion;
      this.semestre = respuesta.trimestre;
      this.escuela = respuesta.facultad;
      this.nombre_completo = respuesta.nombre_completo
      this.cod_asigna = respuesta.cod_asigna
    })
  }

  generar_informe(){
    this.cargando = true;
    this.api.generar_informe(this.usuario, this.cod_asigna, this.tipo, this.fecha, this.asignatura, this.titulacion, this.curso, this.semestre, this.escuela, this.ects, this.modalidad, this.nombre_completo, this.ord_total, this.ord_aprobados, this.ord_suspensos, this.ord_no_presentados, this.ord_sobresalientes, this.ord_notables, this.ext_total, this.ext_aprobados, this.ext_suspensos, this.ext_no_presentados, this.ext_sobresalientes, this.ext_notables, this.obs1, this.obs2, this.obs3, this.obs4).subscribe(respuesta =>{
      if(respuesta.exito == 200){
        var plan = "";
        var num_plan = parseInt(this.cod_asigna.substring(this.cod_asigna.length, this.cod_asigna.length -4)[0])
        if(this.titulacion == "Grado en Ingenieria Informatica" && num_plan == 4){
            plan = "Plan 2020"
        }else if(this.titulacion == "Grado en Ingenieria Informatica" && num_plan == 3){
            plan = "Plan 2015"
        }
        this.message.open("Informe generado correctamente", "Ver Informe").onAction().subscribe(() => window.location.href="https://liveuem.sharepoint.com/sites/Estructura_Ficheros_TFG/Shared%20Documents/Forms/AllItems.aspx?id=/sites/Estructura_Ficheros_TFG/Shared Documents/Titulaciones/" + this.titulacion + "/" + plan + "/" + this.nombre_completo + "/Informes")
        this.cargando = false;
      }else{
        this.message.open("Error al generar el informe", "OK")
        this.cargando = false;
      }
    })
  }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario']
    this.api.get_asignaturas_coordinador(this.usuario).subscribe(respuesta =>{
      this.asignaturas = respuesta
    })
    this.cargando = false;
  }

}
