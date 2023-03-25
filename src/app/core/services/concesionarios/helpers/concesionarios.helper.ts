import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { ApiConcesionario } from './../api/api-concesionarios.model';


export function transformConcesionario(apiConcesionario: ApiConcesionario): Concesionario {
    delete apiConcesionario.__v;
    delete apiConcesionario.createdAt;
    delete apiConcesionario.updatedAt;
    return apiConcesionario
}