import { Comorbidity } from './../../models/Comorbidity';
import { Patient } from '../../models/Patient';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'


interface Gender {
  value: string
  checked: boolean
}

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  genders: Gender[] = [{ value: 'Masculino', checked: true }, { value: 'Feminino', checked: false }]
  gender: Gender = this.genders[0]

  @Input() patient: Patient = initializePatient()
  @Output() eventEmitter = new EventEmitter();

  public patientForm: FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit() {
    if(this.patient.gender === 'Feminino'){
      this.genders[1].checked = true
      this.genders[0].checked = false
      this.gender = this.genders[1]
    }

    this.patientForm = new FormGroup({
      name: new FormControl(this.patient.name, [Validators.required, Validators.minLength(10)]),
      birthDate: new FormControl(this.patient.birthDate, [Validators.required, Validators.minLength(8)]),
      gender: new FormControl(this.patient.gender, []),
    });

  }

  cadastrar(patientFormValue: FormGroup) {
    if (this.patientForm.valid)
      this.updatePatient(patientFormValue as unknown as Patient)
  }

  reciveSelfComorbity(comorbiditie: Comorbidity) {
    this.patient.comorbiditie = comorbiditie;
  }

  reciveFamilyComorbity(comorbiditie: Comorbidity) {
    if (this.patient.family)
      this.patient.family.comorbiditie = comorbiditie;

  }

  updatePatient(patient: Patient) {
    const date = patient.birthDate
    const gender = patient.gender === '' ? this.gender.value : patient.gender

    this.patient.name = patient.name
    this.patient.birthDate = date.includes('/')? date : `${date.substring(0, 2)}/${date.substring(2, 4)}/${date.substring(4, 8)}`
    this.patient.gender = gender.substring(0, 1)

    this.eventEmitter.next(this.patient)
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.patientForm.controls[controlName].hasError(errorName);
  }


}

function initializePatient(): Patient {
  return {
    name: '', birthDate: '', gender: '', comorbiditie: {
      asthma: false, diabetes: false, drink: false, heartDisease: false, hypertension: false, hypotension: false, smoke: false
    },
    family: {
      comorbiditie: {
        asthma: false, diabetes: false, drink: false, heartDisease: false, hypertension: false, hypotension: false, smoke: false
      }
    }
  }
}