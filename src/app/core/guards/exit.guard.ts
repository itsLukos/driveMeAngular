import {  Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateCarComponent } from 'src/app/pages/create-car/create-car.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CreateCarComponent> {
  canDeactivate(
    component: CreateCarComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component?.isCarCreated || component?.carForm?.dirty) {
      return true;
    }
    return window.confirm('¿Estás seguro de que quieres salir? Tus datos no se guardarán');
  }
  
}
