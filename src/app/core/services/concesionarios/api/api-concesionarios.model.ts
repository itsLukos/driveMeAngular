import { ApiCars } from './../../cars/api/api-cars.model';

export interface ApiConcesionario {
    _id: string;
    nombre: string;
    ccaa: string;
    direccion: string;
    telefono: number;
    //quitar corchetes
    coches: ApiCars;
    __v?: number;
    createdAt?: string;
    updatedAt?: string;
}