import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cars-list', loadChildren: () => import("./pages/cars-list/cars-list.module").then( m => m.CarsListModule)
    },
    {
        path: 'cars-detail', loadChildren: () => import("./pages/cars-detail/cars-detail.module").then( m => m.CarsDetailModule)
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }