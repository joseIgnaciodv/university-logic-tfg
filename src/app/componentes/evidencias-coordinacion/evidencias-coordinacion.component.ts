import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogoCerrarComponent } from '../dialogo-cerrar/dialogo-cerrar.component';

@Component({
  selector: 'app-evidencias-coordinacion',
  templateUrl: './evidencias-coordinacion.component.html',
  styleUrls: ['./evidencias-coordinacion.component.scss']
})
export class EvidenciasCoordinacionComponent implements OnInit {
  usuario: string = "";
  cargando: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private dialogo: MatDialog) { }

  cerrar_sesion(drawer: MatDrawer){
    drawer.toggle();
    this.dialogo.open(DialogoCerrarComponent);
  }

  navegar_informes(){
    let url = "/informes/" + this.usuario;
    this.router.navigateByUrl(url);
  }

  navegar_actas(){
    let url = "/actas/" + this.usuario;
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario']
    this.cargando = false;
  }

}
