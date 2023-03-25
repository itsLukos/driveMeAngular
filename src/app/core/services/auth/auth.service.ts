import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, ReplaySubject, tap } from 'rxjs';
import { AuthError, IUser } from './models/auth.models';

const AUTH_URL = 'https://drive-me-rubenprada89-outlookcom.vercel.app/user';
const CAR_URL = 'https://drive-j6wy4qwic-rubenprada89-outlookcom.vercel.app/cars';

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

    this.checkIsLoggedIn();
  }

  public login(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/login`, user, httpOptions).pipe(
      tap((res) => {
        this.userLogged$.next(true);
        this.router.navigate(['account']);
      })
    );
  }

  public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/register`, user);
  }

  public logout(): Observable<string> {
    return this.http.post<string>(`${AUTH_URL}/logout`, undefined, httpOptions).pipe(
      tap(() => {
        this.userLogged$.next(false);
        this.router.navigate(['home']);
      })
    );
  }

  public checkIsLoggedIn() {
    this.http.get<IUser>(`${AUTH_URL}/me`, httpOptions).pipe(
      catchError((err) => {
        let errorType = AuthError.GENERIC;
        if (err.status === 401) {
          errorType = AuthError.AUTH;
        }
        return of(errorType);
      }),
      tap((res: IUser | AuthError) => {
        const isLogged = res !==AuthError.AUTH;
        this.userLogged$.next(isLogged);
      })
    ).subscribe();
  }

  public getCarsById(): Observable<unknown> {
    return this.http.get<unknown>(`${CAR_URL}/641aeae5034f1a6c41ef6b22`);
  }
}
