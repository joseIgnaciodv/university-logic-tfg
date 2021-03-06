import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navegacion-coordinador',
  templateUrl: './navegacion-coordinador.component.html',
  styleUrls: ['./navegacion-coordinador.component.scss']
})
export class NavegacionCoordinadorComponent implements OnInit {
  usuario: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario']
  }

}
