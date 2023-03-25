import { Cars } from './../cars/cars.model';
export interface Concesionario {
    nombre?: string;
    ccaa?: string;
    direccion?: string;
    telefono?: number;
    //quitar corchetes
    coches?: Cars;
    _id: string;
}