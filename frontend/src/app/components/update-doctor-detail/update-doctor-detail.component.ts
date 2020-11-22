import { Doctor } from './../../models/Doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-doctor-detail',
  templateUrl: './update-doctor-detail.component.html',
  styleUrls: ['./update-doctor-detail.component.css']
})
export class UpdateDoctorDetailComponent implements OnInit {

  @Input() doctor!: Doctor
  updatede: boolean = false
  public doctorForm: FormGroup = new FormGroup({})


  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = new FormGroup({
      name: new FormControl(this.doctor.name, [Validators.required, Validators.minLength(10)]),
      crm: new FormControl(this.doctor.crm, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  update(doctorFormValue: FormGroup) {
    if (this.doctorForm.valid)
      this.updateDoctor(doctorFormValue as unknown as Doctor)
  }

  async updateDoctor(doctor: Doctor) {
    this.updatede = false
      this.updatede = await this.doctorService.updateDoctor(this.doctor.crm, doctor)
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.doctorForm.controls[controlName].hasError(errorName);
  }
}
