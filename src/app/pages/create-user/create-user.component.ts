import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  //Grupo de campos que componen el formulario
  public userForm?: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    //Creamos cada campo específico del formulario
    this.userForm = this.fb.group({
      //nombreUsuario: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      //nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      //apellidos: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    })

  }

  public createNewUser() {
    //const userCopy = [...users];

  }
}
