import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { Cars } from 'src/app/core/services/cars/cars.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Cars[] | null, marca: string = '', concesionarios?: Concesionario): Cars[] {
    if(!value) {return []}
    if(!marca && !concesionarios) {return value}
    return value.filter((car) => {
      return car.marca.includes(marca)
        && (car.concesionario.nombre === concesionarios?.nombre || !concesionarios)
    })
  }

}
