import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcesionarioListComponent } from './concesionario-list.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { ConcesionarioListRoutingModule } from './concesionario-list-routing.module';
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    ConcesionarioListComponent,
    ConcesionarioComponent
  ],
  imports: [
    CommonModule,
    ConcesionarioListRoutingModule,
    RouterModule
  ]
})
export class ConcesionarioListModule { }
