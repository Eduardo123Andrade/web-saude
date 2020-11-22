import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Doctor } from './../../models/Doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  crm: string = ''
  doctor!: Doctor
  showDoctorDetails: boolean = false

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  async update(){
    if(this.crm !== ''){
      this.showDoctorDetails = false
      this.doctor = await this.doctorService.searchDoctor({name: '', crm: this.crm})
      this.showDoctorDetails = !!this.doctor
      
    }
  }

}
