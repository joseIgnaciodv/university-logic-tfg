import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-error',
  templateUrl: './dialogo-error.component.html',
  styleUrls: ['./dialogo-error.component.scss']
})
export class DialogoErrorComponent implements OnInit {

  constructor(public dialogoRef: MatDialogRef<DialogoErrorComponent>) { }

  cerrar_mensaje(){
    this.dialogoRef.close();
  }

  ngOnInit(): void {
  }

}
