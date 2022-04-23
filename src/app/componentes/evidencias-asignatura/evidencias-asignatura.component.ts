import { Component, OnInit } from '@angular/core';
import { Evidencia } from 'src/app/modelos/evidencia';
import { CargadorService } from 'src/app/servicios/cargador.service';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

@Component({
  selector: 'app-evidencias-asignatura',
  templateUrl: './evidencias-asignatura.component.html',
  styleUrls: ['./evidencias-asignatura.component.scss']
})
export class EvidenciasAsignaturaComponent implements OnInit {
  
  ahora: Date = new Date()
  lista_evidencias: Evidencia[] = [];
  nombre_asignatura = "Interfaces de Usuario"
  busqueda = "";

  constructor(private api: ServiciosApiService, public cargador: CargadorService) { }

  buscar(consulta: string){
    if(consulta != ""){
      this.lista_evidencias.forEach(element => {
        if(element.nombre_evidencia.includes(consulta)){
          this.lista_evidencias = [];
          this.lista_evidencias.push(element)
        }
      });
    }else{
      this.get_evidencias();
    }
  }

  transformarFecha(fecha: any): string{
    let fecha_date = new Date(fecha)
    let fecha_transformada = fecha_date.toLocaleDateString('en-GB');
    let hora_transformada = fecha_date.toLocaleTimeString('es-ES', {"hour": "2-digit", "minute": "2-digit"})
    return fecha_transformada + " " + hora_transformada;
  }


  get_evidencias(){
    this.api.get_nombre_asignatura(this.nombre_asignatura).subscribe(nombre =>{
      let respuesta = this.api.get_evidencias("Grado Ingenieria Informatica", nombre.asignatura)
      respuesta.subscribe(evidencia =>{
        this.lista_evidencias = evidencia.evidencias;
      })
    })
  }

  ngOnInit(): void {
    this.get_evidencias();
  }

}
