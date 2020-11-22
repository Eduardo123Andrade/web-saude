import { DoctorService } from './../../services/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  doctors: Doctor[] = []
  displayedColumns: string[] = ['crm', 'name']

  constructor(private doctorService: DoctorService) { }

  async ngOnInit() {
    this.doctors = await this.doctorService.listDoctors()
    console.log(this.doctors)
  }

}
