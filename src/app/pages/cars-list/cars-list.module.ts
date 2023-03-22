import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListRoutingModule } from './cars-list-routing.module';
import { CarsListComponent } from './cars-list.component';
import { CarsComponent } from './components/cars/cars.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarsListComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsListRoutingModule,
    RouterModule
  ]
})
export class CarsListModule { }
