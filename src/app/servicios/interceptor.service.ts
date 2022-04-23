import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { CargadorService } from './cargador.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public cargador: CargadorService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.cargador.estaCargando.next(true);

    return next.handle(req).pipe(
      finalize(
        () =>{
          this.cargador.estaCargando.next(false);
        }
      )
    )
  }
}
