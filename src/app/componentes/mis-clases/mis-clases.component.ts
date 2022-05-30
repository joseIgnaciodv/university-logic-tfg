import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  profesor: string = "";
  titulacion: string = "";
  codigo: string = "";

  constructor(private api: ServiciosApiService, private router: Router, public cargador: CargadorService, private route: ActivatedRoute) { }


  ver_evidencias(nombre_asignatura: string){
      this.api.get_info_asignatura(nombre_asignatura).subscribe(clase =>{
        let respuesta_evidencias = this.api.get_evidencias(clase.titulacion, clase.nombre_completo, clase.cod_asigna)
        respuesta_evidencias.subscribe(evidencias =>{
          if (evidencias.evidencias.length == 0){
            this.router.navigateByUrl('/sin_evidencias/' + this.profesor + "/" + nombre_asignatura)
          }else{
            this.router.navigateByUrl('/clases/evidencias_asignatura/' + this.profesor + "/" + nombre_asignatura)
          }
      })
    })
  }

  ngOnInit(): void {
    this.profesor = this.route.snapshot.params['usuario']
    let respuesta = this.api.get_clases(this.profesor)
    respuesta.subscribe(clases =>{
      clases.asignaturas.forEach(clase => {
        this.mis_clases.push(clase)    
      });
    });
  }

}
