import { IUser } from './../../core/services/auth/models/auth.models';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  //Grupo de campos que componen el formulario
  public userForm?: FormGroup;
  public canEdit: boolean = false;
  public userId?: string;
  public isUserCreated: boolean = false;
  public userError?: string;
  public error:string="";
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    //Creamos cada campo específico del formulario
    this.userForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      apellidos: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      telefono: new FormControl('', [Validators.maxLength(9)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      role: new FormControl('', [Validators.required])
    })

  }

  // public createNewUser() {
  //   if(!this.userForm?.valid) {return}
  //   const userRegister: IUser = this.userForm?.value;
  //   this.authService.register(userRegister).subscribe({
  //     next: (res) => {
  //       res;
  //       this.router.navigate(['home']);
  //     },
  //     error: (err) => {
  //       //this.userError = err.error;
  //       this.userForm?.reset();
  //     }
  //   })
  // }
  public createNewUser(){   
    if (!this.userForm?.valid) { return; }
    const user: IUser = this.userForm.value;
    this.authService.register(user).subscribe({
      next: (res) => {
        this.userForm?.reset();
        this.authService.loginJWT(user).subscribe({
          next: (res) => {
            this.userForm?.reset();
            alert("Se han introducido correctamente los datos");
            this.router.navigate(['home']);
          },})        
      },
      error: (err) => {
        if (err.status=500)
        {
          this.error="¿Te habías registrado antes? Parece que ya existe un usuario con ese email"
        }
        else{
             this.error = err.error}
        this.userForm?.reset();        
      },
    });
   }
}
