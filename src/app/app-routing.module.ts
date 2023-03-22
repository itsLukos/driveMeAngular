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
        path: 'concesionario-list',
        //carga el módulo al navegar a la ruta
        loadChildren: () => import('./pages/concesionario-list/concesionario-list.module').then(m => m.ConcesionarioListModule)
    },
    {
        path: 'concesionario-detail/:id',
        loadChildren: () => import('./pages/concesionario-detail/concesionario-detail.module').then(m => m.ConcesionarioDetailModule)
    },
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