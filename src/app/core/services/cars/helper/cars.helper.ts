
import { Concesionario } from './../../concesionarios/concesionario.models';
import { Cars } from 'src/app/core/services/cars/cars.model';
import { ApiCars } from './../api/api-cars.model';


export function transformData(apiCar: ApiCars, selectedConcesionario?: Concesionario): Cars {
    delete apiCar.__v;
    delete apiCar.createdAt;
    delete apiCar.updatedAt;
    return {
        ...apiCar,
        concesionario: selectedConcesionario
            ? selectedConcesionario
            : { _id : apiCar.concesionario._id }
    }
    
}