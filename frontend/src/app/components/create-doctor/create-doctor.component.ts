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


  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      crm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  cadastrar(doctorFormValue: FormGroup) {
    if (this.doctorForm.valid)
      this.registerDoctor(doctorFormValue as unknown as Doctor)
  }

  registerDoctor(doctor: Doctor) {
    console.log(typeof doctor.crm)
    // this.doctorService.createNewDoctor(doctor)
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.doctorForm.controls[controlName].hasError(errorName);
  }

}
