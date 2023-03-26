import { ApiConcesionario } from './api-concesionarios.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASE_URL = 'https://drive-ddl3m20q4-rubenprada89-outlookcom.vercel.app'

@Injectable({
  providedIn: 'root'
})
export class ApiConcesionariosService {

  constructor(

    private http: HttpClient
  ) { }

  //traer todos los concesionarios
  public getApiConcesionarios(): Observable<ApiConcesionario[]> {
    return this.http.get<ApiConcesionario[]>(`${BASE_URL}/concesionarios`)
  }

  //traer por detalle
  public getApiConcesionariosDetail(id: string): Observable<ApiConcesionario> {
    return this.http.get<ApiConcesionario>(`${BASE_URL}/concesionarios/${id}`)
  }
}
