import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  //variable para logeo
  public isLogged: boolean = false;  
  constructor(
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
    //nos subscribimos y si hay user cambiamos la variable isLoged a true
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged)
  }

  public logoutUser() {
    this.auth.logoutJWT();
  }

}

