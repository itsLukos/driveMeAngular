import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcesionarioDetailRoutingModule } from './concesionario-detail-routing.module';
import { ConcesionarioDetailComponent } from './concesionario-detail.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    ConcesionarioDetailComponent
  ],
  imports: [
    CommonModule,
    ConcesionarioDetailRoutingModule,
    RouterModule
  ]
})
export class ConcesionarioDetailModule { }
