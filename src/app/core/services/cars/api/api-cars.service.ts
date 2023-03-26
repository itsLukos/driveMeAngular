import { Cars } from './../cars.model';
import { ApiCars } from './api-cars.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//endpoint de nuestra api que atacamos
const API_CARS_URL = "https://drive-ddl3m20q4-rubenprada89-outlookcom.vercel.app"


@Injectable({
  providedIn: 'root'
})
export class ApiCarsService {

  constructor(
    //http para poder hacer llamadas a la api
    private http: HttpClient
  ) { }

  //endpoint para traer todos los coches
  public getApiCars(): Observable<ApiCars[]> {
    return this.http.get<ApiCars[]>(`${API_CARS_URL}/cars`)
  };

  //endpoint para eliminar datos, pero hay que estar logado como seller
  public removeCars(id: string): Observable<ApiCars> {
    return this.http.delete<ApiCars>(`${API_CARS_URL}/cars/${id}`)
  }

  //endpoint de detalle de coches
  public getCarDetail(id: string): Observable<ApiCars> {
    return this.http.get<ApiCars>(`${API_CARS_URL}/cars/${id}`)
  }

  //endpoint para crear coches
  public createApiCar(body: Cars): Observable<ApiCars> {
    return this.http.post<ApiCars>(`${API_CARS_URL}/cars`, body)
  }

  //endpoint para editar
  public editApiCar(id: string, body: Cars): Observable<ApiCars> {
    return this.http.put<ApiCars>(`${API_CARS_URL}/cars/${id}`, body)
  }

  
}
