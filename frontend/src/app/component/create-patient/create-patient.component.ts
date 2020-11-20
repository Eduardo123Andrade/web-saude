import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  gender: string = ''
  genders: string[] = ['Masculino', 'Feminino']

  constructor() { }

  ngOnInit(): void {
  }

  teste(){
    console.log(this.gender)
  }

}
