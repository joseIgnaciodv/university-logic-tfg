import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialogo-cerrar',
  templateUrl: './dialogo-cerrar.component.html',
  styleUrls: ['./dialogo-cerrar.component.scss']
})
export class DialogoCerrarComponent implements OnInit {

  constructor(private dialogoRef: MatDialogRef<DialogoCerrarComponent>, private router: Router) { }

  cerrar_mensaje(){
    this.dialogoRef.close();
  }

  confirmar_cerrar(){
    this.dialogoRef.close();
    this.router.navigateByUrl("/")
  }

  ngOnInit(): void {
  }

}
