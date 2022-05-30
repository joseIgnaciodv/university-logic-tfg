import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

  usuario: string = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario']
  }

}
