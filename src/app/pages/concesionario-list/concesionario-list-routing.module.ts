import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConcesionarioListComponent } from "./concesionario-list.component";


const routes: Routes = [
    {
        path: '',
        component: ConcesionarioListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConcesionarioListRoutingModule { }