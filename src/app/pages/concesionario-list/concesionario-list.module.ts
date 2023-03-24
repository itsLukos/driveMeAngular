import { ConcesionariosModule } from './components/concesionarios/concesionarios.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcesionarioListComponent } from './concesionario-list.component';

import { ConcesionarioListRoutingModule } from './concesionario-list-routing.module';
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    ConcesionarioListComponent,
    
  ],
  imports: [
    CommonModule,
    ConcesionarioListRoutingModule,
    RouterModule,
    ConcesionariosModule
  ]
})
export class ConcesionarioListModule { }
