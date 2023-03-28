import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RoleUser } from '../../services/auth/models/auth.models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{ 
  
  //variable para logeo
  public isLogged: boolean = false;
    
  constructor(
    private auth: AuthService
  ) {}

  public ngOnInit() {
    //nos subscribimos y si hay user cambiamos la variable isLoged a true
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged)
  }

  public logoutUser() {
    this.auth.logoutJWT();
  }

  //tomo como argumento el array de roles permitidos para indicar si el usuario actual tiene alguno de ellos. Para usar en una sección del header y cambie según el role del usuario
  public userRoleIn(allowedRoles: RoleUser): Observable<boolean> {
    return this.auth.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.role)))
    );    
    }
}

