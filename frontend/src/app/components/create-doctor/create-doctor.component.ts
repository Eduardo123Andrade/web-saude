import { HttpErrorRequest } from './../../errors/HtttpErrorHandler';
import { Doctor } from './../../models/Doctor';
import { DoctorService } from './../../services/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  public doctorForm: FormGroup = new FormGroup({})
  error: HttpErrorRequest = this.defaultErrorValue()
  sucess: {message: string} = {message: ''}


  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = this.defaultFormGroup()
  }

  cadastrar(doctorFormValue: FormGroup) {
    if (this.doctorForm.valid)
      this.registerDoctor(doctorFormValue as unknown as Doctor)
  }

  async registerDoctor(doctor: Doctor) {
    this.error = this.defaultErrorValue()
    try {
     this.sucess = await this.doctorService.createNewDoctor(doctor)
     this.doctorForm.reset()
    } catch (err) {
      this.error = err.error
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.doctorForm.controls[controlName].hasError(errorName);
  }

  defaultFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      crm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  defaultErrorValue(): HttpErrorRequest {
    return { isError: false, errorMessage: '', status: 0 }
  }
}
