import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evidencia } from 'src/app/modelos/evidencia';
import { CargadorService } from 'src/app/servicios/cargador.service';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

@Component({
  selector: 'app-evidencias-asignatura',
  templateUrl: './evidencias-asignatura.component.html',
  styleUrls: ['./evidencias-asignatura.component.scss']
})
export class EvidenciasAsignaturaComponent implements OnInit {
  profesor: string = "";
  asignatura: string = "";
  ahora: Date = new Date()
  lista_evidencias: Evidencia[] = [];
  busqueda = "";

  constructor(private api: ServiciosApiService, public cargador: CargadorService, private route: ActivatedRoute) { }

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
    this.api.get_info_asignatura(this.asignatura).subscribe(clase =>{
      this.api.get_evidencias(clase.titulacion, clase.asignatura, clase.cod_asigna).subscribe(evidencias =>{
        this.lista_evidencias = evidencias.evidencias;
      })
    })
  }

  ngOnInit(): void {
    this.profesor = this.route.snapshot.params['usuario']
    this.asignatura = this.route.snapshot.params['asignatura']
    this.get_evidencias();
  }

}
