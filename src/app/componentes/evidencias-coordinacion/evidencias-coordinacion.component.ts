import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evidencias-coordinacion',
  templateUrl: './evidencias-coordinacion.component.html',
  styleUrls: ['./evidencias-coordinacion.component.scss']
})
export class EvidenciasCoordinacionComponent implements OnInit {
  usuario: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

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
  }

}
