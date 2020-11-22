import { Doctor } from './../../models/Doctor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  @Input() doctor!: Doctor
  filePath: string = './../../../assets/imgs/doctor.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
