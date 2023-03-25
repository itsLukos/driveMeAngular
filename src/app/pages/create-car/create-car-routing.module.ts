import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from 'src/app/core/guards/exit.guard';
import { CreateCarComponent } from './create-car.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCarComponent,
    canDeactivate: [ExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCarRoutingModule { }
