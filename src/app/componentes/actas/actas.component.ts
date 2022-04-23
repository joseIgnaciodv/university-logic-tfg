import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {

  asignaturas = ["Interfaces de Usuario", "Bases de Datos", "Proyecto de Computacion II"];
  asignatura = "";
  tipo = "";
  titulo = "";
  subtitulo = "";
  fecha = new Date();
  completo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
