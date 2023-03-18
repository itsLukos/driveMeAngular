import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsDetailRoutingModule } from './cars-detail-routing.module';
import { CarsDetailComponent } from './cars-detail.component';


@NgModule({
  declarations: [
    CarsDetailComponent
  ],
  imports: [
    CommonModule,
    CarsDetailRoutingModule
  ]
})
export class CarsDetailModule { }
