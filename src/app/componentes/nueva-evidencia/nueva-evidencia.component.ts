import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

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

  archivos = ["PDF", "ZIP", "PNG", "JPG", "CSV", "PPTX", "DOCX", "XLSX"]
  evidencias = ["Prueba de Conocimiento", "Actividad Evaluable", "Otras"]


  constructor(private api: ServiciosApiService, private mensaje: MatSnackBar) { }

  validar_evidencia(){
    if(this.tipo != "" && this.nombre != "" && this.descripcion != "" && this.fichero != ""){
      this.completo = false;
    }else{
      this.completo = true;
    }
  }

  set_evidencia(){
    this.api.get_nombre_asignatura(this.asignatura).subscribe(nombre_asignatura =>{
      let respuesta = this.api.set_evidencia(this.tipo, this.nombre, nombre_asignatura.asignatura);
      respuesta.subscribe(res =>{
        if(res.exito == 200){
          this.mensaje.open('Evidencia creada correctamente', 'OK')
        }
      });
    })
  }

  ngOnInit(): void {
    this.profesor = (<HTMLInputElement>document.getElementById('usuario')).value;
    this.asignatura = (<HTMLInputElement>document.getElementById('asignatura')).value;
  }

}
