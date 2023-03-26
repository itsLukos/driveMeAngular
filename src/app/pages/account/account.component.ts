import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(
    private auth: AuthService,  
  ) { }

  public logoutUser() {
    this.auth.logoutJWT();
  }

}
