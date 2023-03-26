import { LoadingService } from './../loading/loading.service';
import { ApiConcesionario } from './api/api-concesionarios.model';
import { Concesionario } from './concesionario.models';
import { Observable, map, tap } from 'rxjs';
import { ApiConcesionariosService } from './api/api-concesionarios.service';
import { Injectable } from '@angular/core';
import { transformConcesionario } from './helpers/concesionarios.helper';

@Injectable({
  providedIn: 'root'
})
export class ConcesionariosService {

  constructor(
    private apiConcesionariosService: ApiConcesionariosService,
    private loadingService: LoadingService
  ) { }

  public getConcesionarios(): Observable<Concesionario[]> {
    this.loadingService.showLoading();
    return this.apiConcesionariosService.getApiConcesionarios().pipe(
      map((apiConcesionarios: ApiConcesionario[]) => {
        return apiConcesionarios.map((apiConcesionario) => ({
          _id: apiConcesionario._id,
          nombre: apiConcesionario.nombre,
          ccaa: apiConcesionario.ccaa,         
          direccion: apiConcesionario.direccion,
          telefono: apiConcesionario.telefono,
          coches: apiConcesionario.coches
          
        }))
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }
  public getConcesionarioDetail(id: string): Observable<Concesionario> {
    return this.apiConcesionariosService.getApiConcesionariosDetail(id).pipe(
      map(concesionario => transformConcesionario(concesionario))
    )
  }
}
