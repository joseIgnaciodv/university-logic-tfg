import { Component, OnInit } from '@angular/core';
import { CargadorService } from 'src/app/servicios/cargador.service';

@Component({
  selector: 'app-evidencias-vacia',
  templateUrl: './evidencias-vacia.component.html',
  styleUrls: ['./evidencias-vacia.component.scss']
})
export class EvidenciasVaciaComponent implements OnInit {

  constructor(public cargador: CargadorService) { }

  ngOnInit(): void {
  }

}
