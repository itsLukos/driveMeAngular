import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { RoleUser } from '../services/auth/models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasRole(route);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
      const allowedRoles = route.data?.['allowedRoles'];

    return this.authService.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.role))),
      tap((hasRole) => hasRole === false && alert('Acceso denegado')))

    //return this.hasRole(route);
  }

 private hasRole(route: Route | ActivatedRouteSnapshot) {
    const allowedRoles = route.data?.['allowedRoles'];

    return this.authService.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.role))),
      tap((hasRole) => hasRole === false && alert('Acceso denegado'))
    );
  }
}

/*export function hasRole(allowedRoles: RoleUser) {
  
  return () =>
    inject(AuthService).user$.pipe(
    map((user) => Boolean(user && allowedRoles.includes(user.role))),
    tap((hasRole) => hasRole === false && alert('Acceso denegado'))    
  );
}*/
