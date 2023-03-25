import { ConcesionariosService } from './../../../../core/services/concesionarios/concesionarios.service';
import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-concesionarios',
  templateUrl: './concesionarios.component.html',
  styleUrls: ['./concesionarios.component.css']
})
export class ConcesionariosComponent {

  @Input() public concesionario?: Concesionario;

  constructor(
    private router: Router,
    
    ) {

  }


  
  //Función para ir al detalle
  public navigateToDetail() {
    if (this.concesionario) {
      this.router.navigate(['concesionario-detail', this.concesionario._id])
    }
  }

}
