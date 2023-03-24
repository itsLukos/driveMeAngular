import { CarsService } from './../../core/services/cars/cars.service';
import { Cars } from 'src/app/core/services/cars/cars.model';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{

  public cars: Cars[] = [];

  constructor(
    //llamamos al servicio que nos trae los coches
    private carsService: CarsService
  ) {}

  public ngOnInit() {
    this.carsService.getCars().subscribe((carsFromApi) => {
      this.cars = carsFromApi;
      console.log(carsFromApi)
    })
  };

}
