import { FooterComponent } from './components/footer/footer.component';

import { HeaderComponent } from './components/header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent,  
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    FooterComponent
  ],
  providers: [
    
  ]
})
export class CoreModule { }