import { ApiConcesionario } from './api/api-concesionarios.model';
import { Concesionario } from './concesionario.models';
import { Observable, map } from 'rxjs';
import { ApiConcesionariosService } from './api/api-concesionarios.service';
import { Injectable } from '@angular/core';
import { transformConcesionario } from './helpers/concesionarios.helper';

@Injectable({
  providedIn: 'root'
})
export class ConcesionariosService {

  constructor(
    private apiConcesionariosService: ApiConcesionariosService
  ) { }

  public getConcesionarios(): Observable<Concesionario[]> {
    return this.apiConcesionariosService.getApiConcesionarios().pipe(
      map((apiConcesionarios: ApiConcesionario[]) => {
        return apiConcesionarios.map((apiConcesionario) => ({
          _id: apiConcesionario._id,
          nombre: apiConcesionario.nombre,
          ccaa: apiConcesionario.ccaa,
          email: apiConcesionario.email,
          password: apiConcesionario.password,
          direccion: apiConcesionario.direccion,
          telefono: apiConcesionario.telefono,
          coches: apiConcesionario.coches
          
        }))
      })
    )
  }
  public getConcesionarioDetail(id: string): Observable<Concesionario> {
    return this.apiConcesionariosService.getApiConcesionariosDetail(id).pipe(
      map(concesionario => transformConcesionario(concesionario))
    )
  }
}
