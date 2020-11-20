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
  doctor: Doctor = { name: '', crm: '', password: '' }
  public ownerForm: FormGroup = new FormGroup({})


  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      crm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  cadastrar(ownerFormValue: FormGroup) {
    if (this.ownerForm.valid)
      this.registerDoctor(ownerFormValue as unknown as Doctor)
  }

  registerDoctor(doctor: Doctor) {
    this.doctorService.createNewDoctor(doctor)
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

}
