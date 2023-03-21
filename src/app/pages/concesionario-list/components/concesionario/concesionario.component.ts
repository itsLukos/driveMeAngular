import { Component, Input } from '@angular/core';
import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { Router } from '@angular/router'

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent {

  //Creamos el punto de entrada para un valor introducido en el componente padre
  @Input() public concesionario?: Concesionario;

  constructor(private router: Router) {

  }

  //Función para ir al detalle
  public navigateToDetail() {
    if (this.concesionario) {
      this.router.navigate(['concesionario-detail', this.concesionario.id])
    }
  }

}
