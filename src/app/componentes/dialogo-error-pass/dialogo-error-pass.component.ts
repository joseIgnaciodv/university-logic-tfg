import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-error-pass',
  templateUrl: './dialogo-error-pass.component.html',
  styleUrls: ['./dialogo-error-pass.component.scss']
})
export class DialogoErrorPassComponent implements OnInit {

  constructor(public dialogoRef: MatDialogRef<DialogoErrorPassComponent>) { }

  cerrar_mensaje(){
    this.dialogoRef.close();
  }

  ngOnInit(): void {
  }

}
