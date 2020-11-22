import { HttpErrorRequest } from './../../errors/HtttpErrorHandler';
import { Doctor } from 'src/app/models/Doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-delete-doctors',
  templateUrl: './delete-doctors.component.html',
  styleUrls: ['./delete-doctors.component.css']
})
export class DeleteDoctorsComponent implements OnInit {
  crm: string = ''
  deleted: boolean = false
  error: HttpErrorRequest = this.defaultValue();
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  async delete() {
    this.deleted = false
    this.error = this.defaultValue()
    const doctor: Doctor = { name: '', crm: this.crm }
    if (this.crm !== '') {
      try {
        this.deleted = await this.doctorService.deleteDoctor(doctor)
      } catch (err) {
        this.error = err.error
      }

    }
  }

  defaultValue(): HttpErrorRequest {
    return { isError: false, errorMessage: '', status: 0 }
  }
}
