

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Cars } from 'src/app/core/services/cars/cars.model';
import { Router } from '@angular/router';

import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  @Input() public cars?: Cars;


  constructor(
    private router: Router,
    private authService: AuthService,
  
    
    ) {
      
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

  public addFvorite() {
    const user = localStorage.getItem('user-token');
    if(user && this.cars) {
      const userId = JSON.parse(user).id ;
      const carId = this.cars?._id;
      this.authService.sendToFavoritosApi(userId, carId)
      console.log(carId, userId);
      
    }
    
    
    
  }

}
