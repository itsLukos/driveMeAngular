import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcesionarioDetailComponent } from './concesionario-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ConcesionarioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcesionarioDetailRoutingModule { }
