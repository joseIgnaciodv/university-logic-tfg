import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

@Component({
  selector: 'app-admin-asignaturas',
  templateUrl: './admin-asignaturas.component.html',
  styleUrls: ['./admin-asignaturas.component.scss']
})
export class AdminAsignaturasComponent implements OnInit {

  lista_titulaciones: string[] = [];
  seleccion: string = "";

  constructor(private api: ServiciosApiService, private route: ActivatedRoute, private message: MatSnackBar) { }

  subir_titulaciones() {
    this.api.subir_titulaciones(this.seleccion).subscribe(respuesta =>{
      if(respuesta.exito == 200){
        this.message.open("Titulacion cargada correctamente", 'OK')
      }
      else{
        this.message.open("Error al cargar titulacion", "OK");
      }
    })
  }


  ngOnInit(): void {
    this.api.get_titulaciones().subscribe(lista =>{
      lista.titulaciones.forEach(titulacion => {
        this.lista_titulaciones.push(titulacion)
      });
    })
  }

}
