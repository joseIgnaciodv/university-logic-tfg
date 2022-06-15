import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Router } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoErrorComponent } from '../dialogo-error/dialogo-error.component';


const firebaseConfig = {
  apiKey: "AIzaSyDmP0itkk_X-KbaG3-_fF6Wllkl0X7a9NE",
  authDomain: "proyecto-tfg-36e94.firebaseapp.com",
  projectId: "proyecto-tfg-36e94",
  storageBucket: "proyecto-tfg-36e94.appspot.com",
  messagingSenderId: "995654670703",
  appId: "1:995654670703:web:9b9080f62aa57f3a7af09a"
};

const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  correo: string = "";
  password = "";
  perfil: string = "";
  cargando: boolean = true

  constructor(private router: Router, private api: ServiciosApiService, private dialogo: MatDialog) { }

  ngOnInit(): void {
    this.cargando = false;
  }

  validar_usuario(){
    this.api.validar_usuario(this.correo, this.password, this.perfil).subscribe(nombre =>{
      if(nombre == ""){
        this.dialogo.open(DialogoErrorComponent)
      }
      else{
        if(this.perfil == "Profesor"){
          this.router.navigateByUrl('/clases/' + nombre)
        }else if(this.perfil == "Coordinador"){
          this.router.navigateByUrl('/evidencias_coordinacion/' + nombre)
        }
      }
      this.cargando = false
    })
  }

  // async sign_in(){
  //   const proveedor = new OAuthProvider('microsoft.com');
  //   proveedor.setCustomParameters({
  //     prompt: 'consent',
  //     tenant: '032115c7-35fe-4637-b2c3-d0a42906ba7b'
  //   });
  //   const auth = getAuth();
  //   await signInWithPopup(auth, proveedor);
  //    let email = auth.currentUser?.email
  //    this.correo = new String(email);
  //   this.password = "Contraseña1234$";

  //   if(email != null || email != undefined){
  //     let respuesta = this.api.set_usuario(this.correo);
  //     respuesta.subscribe(res =>{
  //       if(res.exito == 200){
          
  //       }
  //     });
  //   }
  // }

}
