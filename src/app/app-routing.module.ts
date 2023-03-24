import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'cars-list', loadChildren: () => import("./pages/cars-list/cars-list.module").then( m => m.CarsListModule)
    },
    {
        path: 'cars-detail/:id', loadChildren: () => import("./pages/cars-detail/cars-detail.module").then( m => m.CarsDetailModule)
    },
    {
        path: 'concesionario-list',
        //carga el módulo al navegar a la ruta
        loadChildren: () => import('./pages/concesionario-list/concesionario-list.module').then(m => m.ConcesionarioListModule)
    },
    {
        path: 'concesionario-detail/:id',
        loadChildren: () => import('./pages/concesionario-detail/concesionario-detail.module').then(m => m.ConcesionarioDetailModule)
    },
    {
        path: 'create-user',
        loadChildren: () => import('./pages/create-user/create-user.module').then(m => m.CreateUserModule)
    },
    {
        path: 'create-car',
        loadChildren: () => import('./pages/create-car/create-car.module').then(m => m.CreateCarModule)
    },
    git
    //Acepta cualquier ruta
    {
        path: '**',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }