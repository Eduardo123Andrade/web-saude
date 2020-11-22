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

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  async search(){
    this.isValidDoctor = false
    this.doctor = await this.doctorService.searchDoctor({name: '', crm: this.crm})
    this.isValidDoctor = !!this.doctor
  }



}
