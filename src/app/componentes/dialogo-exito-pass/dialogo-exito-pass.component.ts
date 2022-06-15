import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogo-exito-pass',
  templateUrl: './dialogo-exito-pass.component.html',
  styleUrls: ['./dialogo-exito-pass.component.scss']
})
export class DialogoExitoPassComponent implements OnInit {

  constructor(private dialogoRef: MatDialogRef<DialogoExitoPassComponent>, private router: Router) { }

  cerrar_mensaje(){
    this.dialogoRef.close();
  }

  volver_inicio(){
    this.dialogoRef.close();
    this.router.navigateByUrl("/")
  }

  ngOnInit(): void {
  }

}
