import { map, of, switchMap } from 'rxjs';
import { CarsService } from './../../core/services/cars/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroceriaCar, MotorCar, TransmisionCar, Cars } from './../../core/services/cars/cars.model';
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
  public isCarCreated: boolean = false;
  public canEdit: boolean = false;
  public carId?: string;
  public isProductCreated: boolean = false;


  constructor(
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private carsService: CarsService,
    private router: Router
  ) {
    //Creamos cada campo específico del formulario
    // this.carForm = this.fb.group({
    //   marca: new FormControl('', [Validators.required]),
    //   modelo: new FormControl('', [Validators.required]),
    //   nuevo: new FormControl('', [Validators.required]),
    //   concesionario: new FormControl('', [Validators.required]),
    //   motor: new FormControl('', [Validators.required]),
    //   transmision: new FormControl('', [Validators.required]),
    //   cilindrada: new FormControl('', [Validators.required]),
    //   carroceria: new FormControl('', [Validators.required]),
    //   precio: new FormControl('', [Validators.required]),
    //   foto: new FormControl('', [Validators.required])
    // })

    this.activateRouter.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          return of(undefined);
        } else {
          this.carId = id;
          return this.carsService.getCarDetail(id)
        }
      }),
    ).subscribe((car?: Cars) => {
      this.canEdit = !!car;
      this.createNewForm(car)
    })
  }

  //funcion para mandar datos del formulario a la api



  public createNewForm(car?: Cars) {
    this.carForm = this.fb.group({
      marca: new FormControl( car?.marca || '', [Validators.required]),
      modelo: new FormControl( car?.modelo || '', [Validators.required]),
      nuevo: new FormControl( car?.nuevo || '', [Validators.required]),
      concesionario: new FormControl( car?.concesionario || '', [Validators.required]),
      motor: new FormControl( car?.motor || '', [Validators.required]),
      transmision: new FormControl( car?.transmision || '', [Validators.required]),
      cilindrada: new FormControl( car?.cilindrada || '', [Validators.required]),
      carroceria: new FormControl( car?.carroceria || '', [Validators.required]),
      precio: new FormControl( car?.precio || '', [Validators.required]),
      foto: new FormControl( car?.foto || '', [Validators.required])
    })
  }

  //funcion para crear nuevos coches
  public createNewCar() {
    if(!this.carForm?.valid) {return}
    const carRequest = this.canEdit && this.carId
      ? this.carsService.editCar(this.carId, this.carForm?.value)
      : this.carsService.createCar(this.carForm?.value);
    carRequest.subscribe(() => {
      this.carForm?.reset();
      this.router.navigate(['cars-list'])
    })
  }

}
