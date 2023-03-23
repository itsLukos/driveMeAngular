import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  //observable variable que sera un booleano true o false
  public shouldShowLoading$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() { 

    //cuando iniciamos siempre esta oculto
    this.shouldShowLoading$.next(false);
  }

  //funcion para cambiarlo a true y se vea
  public showLoading() {
    this.shouldShowLoading$.next(true)
  }

  //funcion para ocultarlo otra vez
  public hideLoading() {
    this.shouldShowLoading$.next(false)
  }
}
