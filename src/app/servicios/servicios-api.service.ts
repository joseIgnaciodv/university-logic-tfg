import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Clases } from 'src/app/modelos/clases';
import { NombreAsignatura } from 'src/app/modelos/nombre-asignatura';
import { Evidencias } from '../modelos/evidencias';
import { Respuesta } from '../modelos/respuesta';
import { Titulaciones } from '../modelos/titulaciones';
import { Clase } from '../modelos/clase';


@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {

  constructor(private http: HttpClient) { }

  get_titulaciones(): Observable<Titulaciones>{
    let url_titulaciones = "get_titulaciones/all"
    let url = environment.apiURL + url_titulaciones
    return this.http.get<Titulaciones>(url);
  }

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

  set_evidencia(tipo:string, nombre:string, asignatura: string, titulacion: string, codigo: string): Observable<Respuesta>{
    let contenido = {"tipo": tipo, "nombre": nombre, "asignatura": asignatura, "titulacion": titulacion, "cod_asigna": codigo}
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

  get_evidencias(titulacion: string, asignatura: string, codigo: string): Observable<Evidencias>{
    let url_evidencias = "sharepoint/" + titulacion + "/" + asignatura + "/" + codigo;
    let url = environment.apiURL + url_evidencias;
    let respuesta = this.http.get<Evidencias>(url);
    return respuesta; 
  }

  get_info_asignatura(asignatura: string): Observable<Clase>{
    let url_info = "get_info_asignatura/" + asignatura;
    let url = environment.apiURL + url_info;
    return this.http.get<Clase>(url);
  }

  crear_qr(profesor: string, asignatura: string, tipo: string, nombre: string, descripcion: string, titulacion: string, codigo: string): Observable<Respuesta>{
    let datos = {"profesor": profesor, "asignatura": asignatura, "tipo": tipo, "nombre": nombre, "descripcion": descripcion, 'titulacion': titulacion, 'cod_asigna': codigo};
    let url_qr = "crear_codigo_qr";
    let url = environment.apiURL + url_qr;
    return this.http.post<Respuesta>(url, datos)
  }

  subir_titulaciones(titulacion: string): Observable<Respuesta>{
    let datos = {"titulacion": titulacion};
    let url_titulaciones = "subir_titulaciones";
    let url = environment.apiURL + url_titulaciones;
    return this.http.post<Respuesta>(url, datos);
  }

  generar_informe(coordinador: string, cod_asigna: string, tipo: string, fecha: string, asignatura: string, titulacion: string, curso: string, semestre: string, escuela: string, ects: string, modalidad: string, nombre_completo: string, ord_total: string, ord_aprobados: string, ord_suspensos: string, ord_no_presentados: string, ord_sobresalientes: string, ord_notables: string, ext_total: string, ext_aprobados: string, ext_suspensos: string, ext_no_presentados: string, ext_sobresalientes: string, ext_notables: string, obs1: string, obs2: string, obs3: string, obs4: string,): Observable<Respuesta>{
    let datos = {"coordinador": coordinador, "cod_asigna": cod_asigna, "tipo": tipo, "fecha": fecha, "asignatura": asignatura, "titulacion": titulacion, "curso": curso, "semestre": semestre, "escuela": escuela, "ects": ects, "modalidad": modalidad, "nombre_completo": nombre_completo, "ord_total": ord_total, "ord_aprobados": ord_aprobados, "ord_suspensos": ord_suspensos, "ord_no_presentados": ord_no_presentados, "ord_sobresalientes": ord_sobresalientes, "ord_notables": ord_notables, "ext_total": ext_total, "ext_aprobados": ext_aprobados, "ext_suspensos": ext_suspensos, "ext_no_presentados": ext_no_presentados, "ext_sobresalientes": ext_sobresalientes, "ext_notables": ext_notables, "obs1": obs1, "obs2": obs2, "obs3": obs3, "obs4": obs4};
    let url_informe = "sharepoint/guardar_informes";
    let url = environment.apiURL + url_informe;
    return this.http.post<Respuesta>(url, datos);
  }

  get_asignaturas_coordinador(nombre: string): Observable<string[]>{
    let url = environment.apiURL + "coordinadores/" + nombre;
    return this.http.get<string[]>(url);
  }
}
