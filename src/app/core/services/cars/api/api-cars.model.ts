import { Concesionario } from './../../concesionarios/concesionario.models';


export interface ApiCars {
    marca: string,
    modelo: string,
    nuevo: string,
    motor: MotorCar,
    transmision: TransmisionCar,
    cilindrada: number,
    carroceria: CarroceriaCar,
    precio: number,
    foto: string,
    __v?: number,
    createdAt?: string,
    updatedAt?: string,
    concesionario: Concesionario[],
    _id: string
}

export type MotorCar =
'Gasolina'
| 'Diesel'
| 'Electrico'
| 'Hibrido';

export type CarroceriaCar = 
'Urbano'
| 'Sedan'
| 'Hatchbak'
| 'Descapotable'
| 'Coupe'
| 'Deportivo'
| 'Monovolumen'
| 'Todoterreno'
| 'Suv'
| 'Roadster'
| 'Pickup'
| 'Furgoneta';

export type TransmisionCar =
'Automatica'
| 'Manual';

