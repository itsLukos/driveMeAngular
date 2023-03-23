import { Router } from '@angular/router';
import { Cars } from './../../../core/services/cars/cars.model';
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
      this.router.navigate(['cars-detail', this.cars.id])
    }
  }

}
