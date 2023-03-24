import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'driveMeAngular';

  public isLogged: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
      this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }
}