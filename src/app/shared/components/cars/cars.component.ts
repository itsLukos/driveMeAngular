import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Cars } from 'src/app/core/services/cars/cars.model';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { RoleUser } from 'src/app/core/services/auth/models/auth.models';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  //variable para logeo
  public isLogged: boolean = false;

  @Input() public cars?: Cars;


  constructor(
    private router: Router,
    private authService: AuthService,
  
    ) { }

  public ngOnInit() {
    //nos subscribimos y si hay user cambiamos la variable isLoged a true
    this.authService.userLogged$.subscribe((isLogged) => this.isLogged = isLogged)
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
      console.log(carId, userId);
      
    } 
  }

  //tomo como argumento el array de roles permitidos para indicar si el usuario actual tiene alguno de ellos. Para que aparezca botón de crear coche según el role del usuario.
  public userRoleIn(allowedRoles: RoleUser): Observable<boolean> {
    return this.authService.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.role)))
    );    
  }

}
