import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListRoutingModule } from './cars-list-routing.module';
import { CarsListComponent } from './cars-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarsListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsListModule { }
