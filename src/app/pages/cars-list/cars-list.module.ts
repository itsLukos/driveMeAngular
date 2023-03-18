import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListRoutingModule } from './cars-list-routing.module';
import { CarsListComponent } from './cars-list.component';


@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarsListRoutingModule
  ]
})
export class CarsListModule { }
