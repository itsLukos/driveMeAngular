import { ApiCars } from './api/api-cars.model';
import { map, Observable } from 'rxjs';
import { ApiCarsService } from './api/api-cars.service';
import { Injectable } from '@angular/core';
import { Cars } from './cars.model';
import { transformData } from './helper/cars.helper';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    //llamamos al servicio que trae los datos de la api
    private apiCarsSercice: ApiCarsService
  ) { }


  //funcion para traer los coches
  public getCars(): Observable<Cars[]> {
    return this.apiCarsSercice.getApiCars().pipe(
      map((cars: ApiCars[]) => {
        return cars.map((car) => transformData(car))
      })
    )
  };

  //funcion para eliminar coches, hay que ser seller
  public removeCar(id: string): Observable<Cars> {
    return this.apiCarsSercice.removeCars(id).pipe(
      map((car) => transformData(car))
    )
  };

  //funcion para traer por id
  public getCarDetail(id: string): Observable<Cars> {
    return this.apiCarsSercice.getCarDetail(id).pipe(
      map(car => transformData(car))
    )
  }

  //funcion para crear nuevo coche
  public createCar(body: Cars): Observable<Cars> {
    return this.apiCarsSercice.createApiCar(body).pipe(
      map((car) => transformData(car))
    )
  }

  //endpoint para modificar coches
  public editCar(id:string, body: Cars): Observable<Cars> {
    return this.apiCarsSercice.editApiCar(id, body).pipe(
      map((car) => transformData(car))
    )
  }
}
