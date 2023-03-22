import { Component } from '@angular/core';
import { cars } from '../../core/service/cars/cars.data';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {

  public cars = cars;

}
