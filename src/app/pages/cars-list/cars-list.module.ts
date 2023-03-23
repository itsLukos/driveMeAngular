import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListRoutingModule } from './cars-list-routing.module';
import { CarsListComponent } from './cars-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarsListRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CarsListModule { }
