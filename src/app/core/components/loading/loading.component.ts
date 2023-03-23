import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit{


  //variable para mostrar el loading que es un observable de boolean true o false
  public shouwldShouwLoading$?: Observable<boolean>;

  constructor(
    //llamamos al servicio del loading
    private loadingService: LoadingService
  ) {}

  //usuamos el ngOnInit para ejecutar el servicio del loading y si es true se muestra y si no, no
  public ngOnInit() {
    this.shouwldShouwLoading$ = this.loadingService.shouldShowLoading$;
  }
}
