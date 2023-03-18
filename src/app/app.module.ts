import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConcesionarioListModule } from './concesionario-list/concesionario-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConcesionarioListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
