import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargadorService } from 'src/app/servicios/cargador.service';

@Component({
  selector: 'app-evidencias-vacia',
  templateUrl: './evidencias-vacia.component.html',
  styleUrls: ['./evidencias-vacia.component.scss']
})
export class EvidenciasVaciaComponent implements OnInit {
  profesor: string = "";
  asignatura: string = "";

  constructor(public cargador: CargadorService, private route: ActivatedRoute, private router: Router) { }

  navegar_evidencia_nueva(){
    let url = "/nueva_evidencia/" + this.profesor + "/" + this.asignatura;
    this.router.navigateByUrl(url)
  }

  ngOnInit(): void {
    this.profesor = this.route.snapshot.params['usuario'];
    this.asignatura = this.route.snapshot.params['asignatura'];
  }

}
