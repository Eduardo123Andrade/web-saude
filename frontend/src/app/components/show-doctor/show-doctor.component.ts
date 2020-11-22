import { HttpErrorRequest } from './../../errors/HtttpErrorHandler';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Doctor } from './../../models/Doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {
  doctor!: Doctor
  crm: string = ''
  isValidDoctor: boolean = false
  error: HttpErrorRequest = this.defaultErrorValue()

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  async search() {
    if (this.crm !== '') {
      this.isValidDoctor = false
      this.error = this.defaultErrorValue()
      try {
        this.doctor = await this.doctorService.searchDoctor({ name: '', crm: this.crm })
        this.isValidDoctor = !!this.doctor
      } catch (err) {
        this.error = err.error
      }
    }
  }

  defaultErrorValue(): HttpErrorRequest {
    return { isError: false, errorMessage: '21312312', status: 0 }
  }
}
