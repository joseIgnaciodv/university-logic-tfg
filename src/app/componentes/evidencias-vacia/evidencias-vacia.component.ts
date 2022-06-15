import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { CargadorService } from 'src/app/servicios/cargador.service';
import { DialogoCerrarComponent } from '../dialogo-cerrar/dialogo-cerrar.component';

@Component({
  selector: 'app-evidencias-vacia',
  templateUrl: './evidencias-vacia.component.html',
  styleUrls: ['./evidencias-vacia.component.scss']
})
export class EvidenciasVaciaComponent implements OnInit {
  profesor: string = "";
  asignatura: string = "";
  cargando: boolean = true;

  constructor(public cargador: CargadorService, private route: ActivatedRoute, private router: Router, private dialogo: MatDialog) { }

  cerrar_sesion(drawer: MatDrawer){
    drawer.toggle();
    this.dialogo.open(DialogoCerrarComponent);
  }

  navegar_evidencia_nueva(){
    this.cargando = true;
    let url = "/nueva_evidencia/" + this.profesor + "/" + this.asignatura;
    this.router.navigateByUrl(url)
    this.cargando = false;
  }

  ngOnInit(): void {
    this.cargando = true;
    this.profesor = this.route.snapshot.params['usuario'];
    this.asignatura = this.route.snapshot.params['asignatura'];
    this.cargando = false;
  }

}
