import { Component, Input } from '@angular/core';
import { Cars } from 'src/app/core/service/cars/cars.model';
import { Router } from '@angular/router';

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
