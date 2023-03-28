import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ShowForRolesDirective } from './services/auth/directives/show-for-roles.directive';



@NgModule({
  declarations: [
    LoadingComponent,  
    HeaderComponent,
    FooterComponent,
    ShowForRolesDirective
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    FooterComponent,
    ShowForRolesDirective
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }