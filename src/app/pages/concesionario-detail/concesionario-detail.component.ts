import { Component } from '@angular/core';
import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { ActivatedRoute } from '@angular/router'
import { concesionarios } from 'src/app/core/services/concesionarios/concesionario.data';

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
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const concesionarioId = params['id'];
      this.concesionario = concesionarios.find(concesionario => concesionario.id === concesionarioId);
    })
  }
}
