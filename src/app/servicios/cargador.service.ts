import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargadorService {

  public estaCargando: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
