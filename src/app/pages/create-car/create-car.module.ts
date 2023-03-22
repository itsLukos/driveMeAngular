import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateCarRoutingModule } from './create-car-routing.module';
import { CreateCarComponent } from './create-car.component';


@NgModule({
  declarations: [
    CreateCarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateCarRoutingModule
  ]
})
export class CreateCarModule { }
