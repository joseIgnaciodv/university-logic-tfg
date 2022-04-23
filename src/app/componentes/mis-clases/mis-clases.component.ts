import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clase } from 'src/app/modelos/clase';
import { CargadorService } from 'src/app/servicios/cargador.service';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

@Component({
  selector: 'app-mis-clases',
  templateUrl: './mis-clases.component.html',
  styleUrls: ['./mis-clases.component.scss']
})
export class MisClasesComponent implements OnInit {
  mis_clases: Clase[] = [];

  constructor(private api: ServiciosApiService, private router: Router, public cargador: CargadorService) { }


  ver_evidencias(nombre_asignatura: string){
    let respuesta = this.api.get_nombre_asignatura(nombre_asignatura)
    respuesta.subscribe(nombre_completo => {
      let nombre = nombre_completo.asignatura;
      let respuesta_evidencias = this.api.get_evidencias("Grado Ingenieria Informatica", nombre)
      respuesta_evidencias.subscribe(evidencias =>{
        if (evidencias.evidencias.length == 0){
          this.router.navigateByUrl('/sin_evidencias')
        }else{
          this.router.navigateByUrl('/clases/evidencias_asignatura')
        }
      })
    })
  }

  ngOnInit(): void {
    let respuesta = this.api.get_clases("Jose Ignacio Del Valle Bustillo")
    respuesta.subscribe(clases =>{
      clases.asignaturas.forEach(clase => {
        this.mis_clases.push(clase)    
      });
    });
  }

}
