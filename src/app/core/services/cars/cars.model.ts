import { ApiConcesionario } from './../concesionarios/api/api-concesionarios.model';
import { Concesionario } from './../concesionarios/concesionario.models';

export interface Cars {
    marca: string,
    modelo: string,
    nuevo: string,
    motor: MotorCar,
    transmision: TransmisionCar,
    cilindrada: number,
    carroceria: CarroceriaCar,
    precio: number,
    foto: string,
    concesionario: Concesionario,
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
