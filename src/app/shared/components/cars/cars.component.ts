import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Cars } from 'src/app/core/services/cars/cars.model';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { RoleUser } from 'src/app/core/services/auth/models/auth.models';
import { map, Observable, tap } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  //variable para logeo
  //public isLogged: boolean = false;

  @Input() public cars?: Cars;

  canEdit = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  
    ) { }

  public ngOnInit() {
    //nos subscribimos y si hay user cambiamos la variable isLoged a true
    const editPermission = this.authService.userRoleIn('seller').pipe(
      tap((value) => this.canEdit = value)      
    );

    [editPermission].forEach((x:Observable<any>) => x.subscribe());
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

  public addFavorite() {
    const user = localStorage.getItem('user-token');
    if(user && this.cars) {
      const userId = JSON.parse(user).id ;
      const carId = this.cars?._id;
      this.authService.sendToFavoritosApi(userId, carId)      
    } 
  }
}
