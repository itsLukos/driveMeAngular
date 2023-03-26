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

  public createNewUser() {
    this.authService.createUser(this.userForm?.value).subscribe(() => {
      this.userForm?.reset();
      this.router.navigate(['car-list'])
    });
  }
}
