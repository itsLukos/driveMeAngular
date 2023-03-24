
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './components/loading/loading.component';




@NgModule({
  declarations: [
    
    LoadingComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
    
    LoadingComponent
  ],
  providers: [
    
  ]
})
export class CoreModule { }