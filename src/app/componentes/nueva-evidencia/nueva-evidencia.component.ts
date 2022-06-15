import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { DialogoCerrarComponent } from '../dialogo-cerrar/dialogo-cerrar.component';

@Component({
  selector: 'app-nueva-evidencia',
  templateUrl: './nueva-evidencia.component.html',
  styleUrls: ['./nueva-evidencia.component.scss']
})
export class NuevaEvidenciaComponent implements OnInit {
  tipo:string = "";
  nombre:string = "";
  asignatura: string = "";
  descripcion: string = "";
  profesor: string = "";
  completo: boolean = true;
  fichero: string = "";

  codigo: string = "";
  titulacion: string = "";

  cargando:boolean = true;

  archivos = ["PDF", "ZIP", "PNG", "JPG", "CSV", "PPTX", "DOCX", "XLSX"]
  evidencias = ["Prueba de Conocimiento", "Actividad Evaluable", "Otras"]


  constructor(private api: ServiciosApiService, private mensaje: MatSnackBar, private route: ActivatedRoute, private router: Router, private dialogo: MatDialog) { }

  cerrar_sesion(drawer: MatDrawer){
    drawer.toggle();
    this.dialogo.open(DialogoCerrarComponent);
  }

  validar_evidencia(){
    if(this.tipo != "" && this.nombre != "" && this.descripcion != ""){
      this.completo = false;
    }else{
      this.completo = true;
    }
  }

  set_evidencia(){
    this.cargando = true;
    this.api.get_nombre_asignatura(this.asignatura).subscribe(nombre_asignatura =>{
      let respuesta = this.api.set_evidencia(this.tipo, this.nombre, nombre_asignatura.asignatura, this.titulacion, this.codigo);
      respuesta.subscribe(res =>{
        if(res.exito == 200){
          this.api.crear_qr(this.profesor, this.asignatura, this.tipo, this.nombre, this.descripcion, this.titulacion, this.codigo).subscribe(r =>{
            if(r.exito == 200){
              this.mensaje.open('Evidencia creada correctamente', 'OK').onAction().subscribe(() => this.router.navigateByUrl("/visualizar_qr/" + this.profesor + "/" + r.nombre_fichero + "/" + r.url))
              this.cargando = false;
            }
          })
        }
      });
    })
  }

  ngOnInit(): void {
    this.profesor = this.route.snapshot.params['usuario'];
    this.asignatura = this.route.snapshot.params['asignatura'];
    this.cargando = true
    this.api.get_info_asignatura(this.asignatura).subscribe(clase =>{
      this.codigo = clase.cod_asigna
      this.titulacion = clase.titulacion
    });
    this.cargando = false;
  }

}
