import { ConcesionariosService } from './../../core/services/concesionarios/concesionarios.service';
import { Component } from '@angular/core';
import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-concesionario-detail',
  templateUrl: './concesionario-detail.component.html',
  styleUrls: ['./concesionario-detail.component.css']
})
export class ConcesionarioDetailComponent {

  //Mostramos el concesionario
  public concesionario?: Concesionario;

  constructor(
    //información de la ruta activa
    private activatedRoute: ActivatedRoute,
    private concesionariosService: ConcesionariosService,
    
  ) {
    
    this.activatedRoute.params.subscribe((params) => {
      const concesionarioId = params['id'];
      this.concesionariosService.getConcesionarioDetail(concesionarioId).subscribe((concesionario) => {
        this.concesionario = concesionario
      })
    })
  }
  
}
