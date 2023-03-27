import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcesionariosComponent } from './concesionarios.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ConcesionariosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule, MatButtonModule
  ],
  exports: [
    ConcesionariosComponent
  ]
})
export class ConcesionariosModule { }
