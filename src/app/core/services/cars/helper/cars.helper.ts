import { Cars } from 'src/app/core/services/cars/cars.model';
import { ApiCars } from './../api/api-cars.model';


export function transformData(apiCar: ApiCars): Cars {
    delete apiCar.__v;
    delete apiCar.createdAt;
    delete apiCar.updatedAt;
    return apiCar;
    
}