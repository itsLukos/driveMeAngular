import { RouterModule } from '@angular/router';
import { CarsListModule } from './../pages/cars-list/cars-list.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './components/cars/cars.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    CarsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule, MatButtonModule
  ],
  exports: [
    CarsComponent,
    FilterPipe
  ]
})
export class SharedModule { }
