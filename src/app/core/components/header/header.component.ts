import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { RoleUser } from '../../services/auth/models/auth.models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{ 
  
  //variable para logeo
  public isLogged: boolean = false;

  //variable para acceso a favoritos
  public canSeeFavorite = false;
    
  constructor(
    private auth: AuthService
  ) {}

  public ngOnInit() {
    //nos subscribimos y si hay user cambiamos la variable isLoged a true
    //this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged)
    const isLogged = this.auth.userLogged$.pipe(
      tap((isLogged) => this.isLogged = isLogged)
    )
    
    //Observable para validar favoritos
    const favoritePermission = this.auth.userRoleIn('buyer').pipe(
      tap((user) => this.canSeeFavorite = user)
    );

    [isLogged,favoritePermission].forEach((x:Observable<any>) => x.subscribe());
  }

  

  public logoutUser() {
    this.auth.logoutJWT();
  }

}

