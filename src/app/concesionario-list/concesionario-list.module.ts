import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcesionarioListComponent } from './concesionario-list.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';



@NgModule({
  declarations: [
    ConcesionarioListComponent,
    ConcesionarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConcesionarioListComponent
  ]
})
export class ConcesionarioListModule { }
