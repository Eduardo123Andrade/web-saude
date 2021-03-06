import { Comorbidity } from './../../models/Comorbidity';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

interface ChronicDiseases {
  name: string
  checked: boolean
  color: ThemePalette,
  fieldName: string
}

@Component({
  selector: 'app-chronic-diseases',
  templateUrl: './chronic-diseases.component.html',
  styleUrls: ['./chronic-diseases.component.css']
})
export class ChronicDiseasesComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter()

  comorbidities: Comorbidity = {
    asthma: false, diabetes: false, drink: false, heartDisease: false, hypertension: false, hypotension: false, smoke: false
  }

  chronicDiseases: ChronicDiseases[] = [
    { name: 'Fuma', checked: false, color: 'primary', fieldName: 'smoke' },
    { name: 'Bebe', checked: false, color: 'primary', fieldName: 'drink' },
    { name: 'Hipertensão', checked: false, color: 'primary', fieldName: 'hypertension' },
    { name: 'Hipotensão', checked: false, color: 'primary', fieldName: 'hypotension' },
    { name: 'Doença cardiaca', checked: false, color: 'primary', fieldName: 'heartDisease' },
    { name: 'Diabetes', checked: false, color: 'primary', fieldName: 'diabetes' },
    { name: 'Asma', checked: false, color: 'primary', fieldName: 'asthma' },
  ]

  allComplete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeChecked(disease: ChronicDiseases) {
    this.updateComorbidities(disease.fieldName, disease.checked)
    this.eventEmitter.emit(this.comorbidities)
  }

  updateComorbidities(fieldName: string, checked: boolean) {
    switch (fieldName) {
      case 'smoke': {
        this.comorbidities[fieldName] = checked
        break;
      }
      case 'drink': {
        this.comorbidities[fieldName] = checked
        break;
      }
      case 'hypertension': {
        this.comorbidities[fieldName] = checked
        break;
      }
      case 'hypotension': {
        this.comorbidities[fieldName] = checked
        break;
      }
      case 'heartDisease': {
        this.comorbidities[fieldName] = checked
        break;
      }
      case 'diabetes': {
        this.comorbidities[fieldName] = checked
        break;
      }
      case 'asthma': {
        this.comorbidities[fieldName] = checked
        break;
      }

    }
  }
}

