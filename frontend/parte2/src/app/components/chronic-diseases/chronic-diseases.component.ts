import { Comorbidity } from './../../models/Comorbidity';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChronicDiseases {
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

  @Input() disable: boolean = true

  @Input() comorbiditie: Comorbidity | undefined = {
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
    this.chronicDiseases = this.chronicDiseases.map(disease => {
      return {
        name: disease.name,
        color: disease.color,
        fieldName: disease.fieldName,
        checked: this.getCheckedFromComorbidities(disease.fieldName),

      }
    })
  }

  private getCheckedFromComorbidities(fieldName: string): boolean {
    if (!this.comorbiditie) return false
    switch (fieldName) {
      case 'smoke': {
        return this.comorbiditie[fieldName];
      }
      case 'drink': {
        return this.comorbiditie[fieldName];
      }
      case 'hypertension': {
        return this.comorbiditie[fieldName];
      }
      case 'hypotension': {
        return this.comorbiditie[fieldName];
      }
      case 'heartDisease': {
        return this.comorbiditie[fieldName];
      }
      case 'diabetes': {
        return this.comorbiditie[fieldName];
      }
      case 'asthma': {
        return this.comorbiditie[fieldName];
      }
      default:
        return false
    }
  }

  changeChecked(disease: ChronicDiseases) {
    this.updateComorbidities(disease.fieldName, disease.checked)
    this.eventEmitter.emit(this.comorbiditie)
  }

  updateComorbidities(fieldName: string, checked: boolean) {
    if (!this.comorbiditie) return
    switch (fieldName) {
      case 'smoke': {
        this.comorbiditie[fieldName] = checked
        break;
      }
      case 'drink': {
        this.comorbiditie[fieldName] = checked
        break;
      }
      case 'hypertension': {
        this.comorbiditie[fieldName] = checked
        break;
      }
      case 'hypotension': {
        this.comorbiditie[fieldName] = checked
        break;
      }
      case 'heartDisease': {
        this.comorbiditie[fieldName] = checked
        break;
      }
      case 'diabetes': {
        this.comorbiditie[fieldName] = checked
        break;
      }
      case 'asthma': {
        this.comorbiditie[fieldName] = checked
        break;
      }

    }
  }
}

