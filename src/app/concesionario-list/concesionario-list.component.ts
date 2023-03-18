import { Component } from '@angular/core';
import { concesionarios } from '../core/services/concesionarios/concesionario.data';

@Component({
  selector: 'app-concesionario-list',
  templateUrl: './concesionario-list.component.html',
  styleUrls: ['./concesionario-list.component.css']
})
export class ConcesionarioListComponent {

  //Creamos una variable pública para acceder a los concesinarios desde HTML
  public concesionarios = concesionarios

}
