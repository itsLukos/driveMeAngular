import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public logoutUser() {
    this.auth.logout();
    this.router.navigate(['home']);
  }

}
