import { CarsService } from './../../core/services/cars/cars.service';
import { ApiCars } from './../../core/services/cars/api/api-cars.model';
import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Cars } from '../../core/services/cars/cars.model'



@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent {

  public cars?: Cars;

  constructor(
    //activatedroute para coger los params de la ruta
    private activatedRoute: ActivatedRoute,
    //servicio http
    private carsService: CarsService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams)
    })
    this.activatedRoute.params.subscribe((params) => {
    const carId = params['id'];
    this.carsService.getCarDetail(carId).subscribe((car) => {
      this.cars = car
    })
      
    });

    this.activatedRoute.data.subscribe((data) => {
      if (data[0]) {
        this.cars = data[0];
      }
    })
  } 

  //funcion para volver a el listado de coches
  public navigateToCarsList() {
    this.router.navigate(['cars-list'])
  }
}
