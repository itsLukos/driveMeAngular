export interface Cars {
    marca: string,
    modelo: string,
    nuevo: string,
    motor: MotorCar,
    transmision: string,
    cilindrada: number,
    carroceria: CarroceriaCar,
    precio: number,
    concesionario: string,
    id: string
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
