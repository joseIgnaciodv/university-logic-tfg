import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { DialogoErrorPassComponent } from '../dialogo-error-pass/dialogo-error-pass.component';
import { DialogoExitoPassComponent } from '../dialogo-exito-pass/dialogo-exito-pass.component';

@Component({
  selector: 'app-perfil-coordinador',
  templateUrl: './perfil-coordinador.component.html',
  styleUrls: ['./perfil-coordinador.component.scss']
})
export class PerfilCoordinadorComponent implements OnInit {
  usuario: string = "";
  cod_usuario: string = "";
  correo: string = "";
  tipo: string = ""; 
  cargando: boolean = true;
  pulsado_pass: boolean = false;
  pulsado_info: boolean = true;

  pass_actual: string = "";
  nueva_pass: string = "";
  nueva_pass_confirmar: string = "";

  constructor(private route: ActivatedRoute, private api: ServiciosApiService, private dialogo: MatDialog) { }

  validar_pass(){
    this.cargando = true;
    this.api.validar_pass(this.tipo, this.correo, this.pass_actual, this.nueva_pass, this.nueva_pass_confirmar).subscribe(respuesta =>{
      if(respuesta == "error"){
        this.dialogo.open(DialogoErrorPassComponent)
        this.cargando = false;
      }else if(respuesta == "exito"){
        this.dialogo.open(DialogoExitoPassComponent)
        this.cargando = false;
      }
    })
  }

  cancelar(){
    this.pass_actual = "";
    this.nueva_pass = "";
    this.nueva_pass_confirmar = "";
  }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario'];
    this.api.get_usuario(this.usuario, "Coordinador").subscribe(respuesta =>{
      this.cod_usuario = respuesta.cod_profes
      this.correo = respuesta.dir_mail
      this.tipo = respuesta.tipo
    })
    this.cargando = false;
  }

}
