import { ConcesionariosService } from './../../core/services/concesionarios/concesionarios.service';
import { Concesionario } from 'src/app/core/services/concesionarios/concesionario.models';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-concesionario-list',
  templateUrl: './concesionario-list.component.html',
  styleUrls: ['./concesionario-list.component.css']
})
export class ConcesionarioListComponent implements OnInit{

  //Creamos una variable pública para acceder a los concesinarios desde HTML
  public concesionarios?: Concesionario[] = [];


  constructor(
    private concesionariosService: ConcesionariosService
  ) {}

  public ngOnInit() {
    this.concesionariosService.getConcesionarios().subscribe((concesionariosFromApi) => {
      this.concesionarios = concesionariosFromApi
    })
  }
}
