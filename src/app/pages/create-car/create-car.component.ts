import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
;

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  //Grupo de campos que componen el formulario
  public carForm?: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
    //Creamos cada campo específico del formulario
    this.carForm = this.fb.group({
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      nuevo: new FormControl('', [Validators.required]),
      concesionario: new FormControl('', [Validators.required]),
      motor: new FormControl('', [Validators.required]),
      transmision: new FormControl('', [Validators.required]),
      cilindrada: new FormControl('', [Validators.required]),
      carroceria: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required])
    })
  }

  public createNewCar() {

  }

}
