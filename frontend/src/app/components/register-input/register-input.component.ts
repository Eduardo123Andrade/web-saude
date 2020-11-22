import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-input',
  templateUrl: './register-input.component.html',
  styleUrls: ['./register-input.component.css']
})
export class RegisterInputComponent implements OnInit {

  @Input() filePath: string = './../../../assets/imgs/doctor.svg'
  @Input() componentName: string = 'Cadastro de Medicos'
  @Input() nextRouter: string = '/admin'

  constructor() { }

  ngOnInit(): void {
  }

}
