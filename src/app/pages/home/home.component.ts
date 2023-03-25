import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(
    private authService: AuthService
  ) {}

  public getCarsById() {
    this.authService.getCarsById().subscribe((cars) => console.log(cars));
  }
}
