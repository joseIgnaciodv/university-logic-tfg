import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {

  usuario: string = "";
  asignaturas = ["Interfaces de Usuario", "Bases de Datos", "Proyecto de Computacion II"];
  asignatura = "";
  tipo = "Actas";
  titulo = "";
  subtitulo = "";
  fecha = new Date();
  completo = false;

  constructor(private route: ActivatedRoute, private router: Router, private api: ServiciosApiService) { }

  volver_atras(){
    let url = "/evidencias_coordinacion/" + this.usuario;
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario'];
  }

}
