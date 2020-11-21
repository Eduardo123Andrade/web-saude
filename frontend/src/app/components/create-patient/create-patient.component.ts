import { PatientService } from './../../services/patient/patient.service';
import { Comorbidity } from './../../models/Comorbidity';
import { Patient } from './../../models/Patient';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'


interface Gender {
  value: string
  checked: boolean
}

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  genders: Gender[] = [{ value: 'Masculino', checked: true }, { value: 'Feminino', checked: false }]
  gender: Gender = this.genders[0]

  patient: Patient = initializePatient()


  public patientForm: FormGroup = new FormGroup({})

  constructor(public patientService: PatientService) { }

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      birthDate: new FormControl('', [Validators.required, Validators.minLength(8)]),
      gender: new FormControl('', []),
    });
  }

  cadastrar(patientFormValue: FormGroup) {
    if (this.patientForm.valid)
      this.registerPatient(patientFormValue as unknown as Patient)
  }

  reciveSelfComorbity(comorbiditie: Comorbidity) {
    this.patient.comorbiditie = comorbiditie;
  }

  reciveFamilyComorbity(comorbiditie: Comorbidity) {
    if (this.patient.family)
      this.patient.family.comorbiditie = comorbiditie;

  }

  registerPatient(patient: Patient) {
    const date = patient.birthDate
    const gender = patient.gender === '' ? this.gender.value : patient.gender
    
    this.patient.name = patient.name
    this.patient.birthDate = `${date.substring(0, 2)}/${date.substring(2, 4)}/${date.substring(4, 8)}`
    this.patient.gender = gender.substring(0, 1)

    this.patientService.createNewPatient(this.patient)
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.patientForm.controls[controlName].hasError(errorName);
  }


}

function initializePatient() {
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