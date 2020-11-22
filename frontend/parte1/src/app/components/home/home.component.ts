import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  filePatientPath: string = './../../../assets/imgs/patient.svg'
  componentName: string = 'Cadastro de Paciente'
  nextRouter: string = '/create-patient'

  constructor() { }

  ngOnInit(): void {
  }

}
