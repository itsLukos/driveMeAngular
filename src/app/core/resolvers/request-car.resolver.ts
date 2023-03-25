import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cars } from '../services/cars/cars.model';
import { CarsService } from '../services/cars/cars.service';

@Injectable({
  providedIn: 'root'
})
export class RequestCarResolver implements Resolve<Cars | null> {

  constructor( private carService: CarsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cars | null> {
    const id = route.params['_id'];
    if (!id) { return of(null); }
    return this.carService.getCarDetail(id);
  }
}
