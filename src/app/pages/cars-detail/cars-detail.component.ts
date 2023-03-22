import { Component } from '@angular/core';
import { cars } from '../../core/services/cars/cars.data';
import { ActivatedRoute } from '@angular/router';
import { Cars } from '../../core/services/cars/cars.model'



@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent {

  public cars?: Cars;

  constructor(
    private activatedRoute: ActivatedRoute,
    
  ) {

    this.activatedRoute.params.subscribe((params) => {
      const carId = params['id'];
      this.cars = cars.find((car) => carId===car.id.toString())
      
    });
  }

}
