import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

const AUTH_URL = 'https://drive-me-rubenprada89-outlookcom.vercel.app/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 

    this.userLogged$.next(false);
  }

  public login() {

    this.userLogged$.next(true);
  }

  public logout() {
    
    this.userLogged$.next(false);

  }
}
