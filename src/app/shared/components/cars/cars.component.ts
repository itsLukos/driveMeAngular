import { Cars } from 'src/app/core/services/cars/cars.model';
import { Router } from '@angular/router';
import { ApiCars } from '../../../core/services/cars/api/api-cars.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  @Input() public cars?: Cars;

  constructor(private router: Router) {

  }

  public navigateToDetail() {
    if (this.cars) {
      this.router.navigate(['cars-detail', this.cars._id])
    }
  }

  public editCar() {
    this.router.navigate(['create-car'], { queryParams: {
      id: this.cars?._id
    }})
  }

}
