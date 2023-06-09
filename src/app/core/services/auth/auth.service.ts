import { Cars } from 'src/app/core/services/cars/cars.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, ReplaySubject, tap } from 'rxjs';
import { AuthError, IUser, IUserSignInResponse, RoleUser } from './models/auth.models';

const AUTH_URL = 'https://drive-ddl3m20q4-rubenprada89-outlookcom.vercel.app/user';
const TOKEN_KEY = 'user-token';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  
  public user = new BehaviorSubject<IUser | undefined>(JSON.parse(localStorage.getItem('user-token') ?? '{}'));
  public user$ = this.user.asObservable();
  public IsLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.userLogged$.next(this.isLoggedJWT());
  }

  public loginJWT(user: IUser): Observable<IUserSignInResponse> {
    return this.http.post<IUserSignInResponse>(`${AUTH_URL}/login`, user).pipe(
      tap((res: IUserSignInResponse) => {
        const userToStore = JSON.stringify({
          token: res.token,
          id: res.user._id,
          email: res.user.email,
          role:  res.user.role
        });
        localStorage.setItem(TOKEN_KEY, userToStore);
        this.userLogged$.next(true);
        this.router.navigate(['account']);
      })
    )
  }

  public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/register`, user);
  }

  public logoutJWT() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
    if (removeToken !== null) {
      this.router.navigate(['']);
    }
  }

  public isLoggedJWT(): boolean {
    const authToken = localStorage.getItem(TOKEN_KEY);
    if (!authToken) { return false; }
    const isValidToken = JSON.parse(authToken)?.token;
    return !!isValidToken;
  }

  public getToken(): string | null {
    const authToken = localStorage.getItem(TOKEN_KEY);
    return authToken ? JSON.parse(authToken)?.token : null;
  }
  
  //endpoint para añadir a favoritos
  public sendToFavoritosApi(userId: string, carId: string): Observable<IUser> {
    const body = {

      "carId": carId,
      "userId": userId
    
    }
    return this.http.put<IUser>(`${AUTH_URL}/addFavoriteCar`, body)
  }

  //tomo como argumento el array de roles permitidos para indicar si el usuario actual tiene alguno de ellos. Para que aparezca botón de crear coche según el role del usuario. Ubicamos aquí la función para poder usarla en distintas partes de la página.

  public userRoleIn(allowedRoles: RoleUser): Observable<boolean> {
    return this.user$.pipe(
      map((user) => Boolean( user && allowedRoles.includes(user.role)))
    );
  }
}
