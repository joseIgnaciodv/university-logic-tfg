import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Clases } from 'src/app/modelos/clases';
import { NombreAsignatura } from 'src/app/modelos/nombre-asignatura';
import { Evidencias } from '../modelos/evidencias';
import { Respuesta } from '../modelos/respuesta';


@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {

  constructor(private http: HttpClient) { }

  get_clases(nombre: string): Observable<Clases>{
    let url_clase = "clases/" + nombre;
    let url = environment.apiURL + url_clase;
    let respuesta = this.http.get<Clases>(url);
    return respuesta;
  }

  set_usuario(correo: String): Observable<Respuesta>{
    let url_usuario = "usuario";
    let url = environment.apiURL + url_usuario;
    return this.http.post<Respuesta>(url, {"correo": correo}); 
  }

  set_evidencia(tipo:string, nombre:string, asignatura: string): Observable<Respuesta>{
    let contenido = {"tipo": tipo, "nombre": nombre, "asignatura": asignatura}
    let url_evidencia = "subir_evidencia";
    let url = environment.apiURL + url_evidencia;
    return this.http.post<Respuesta>(url, contenido); 
  }

  get_nombre_asignatura(nombre_asignatura:string): Observable<NombreAsignatura>{
    let url_clase = "get_clase/" + nombre_asignatura;
    let url = environment.apiURL + url_clase;
    let respuesta = this.http.get<NombreAsignatura>(url);
    return respuesta;
  }

  get_evidencias(titulacion: string, asignatura: string): Observable<Evidencias>{
    let url_evidencias = "sharepoint/" + titulacion + "/" + asignatura;
    let url = environment.apiURL + url_evidencias;
    let respuesta = this.http.get<Evidencias>(url);
    return respuesta; 
  }
}
