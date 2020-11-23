import { Patient } from './../../models/Patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";

const BACKEND_URL = environment.apiUrl + "/patients"


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  createNewPatient(patient: Patient) {
    const link = BACKEND_URL
    this.http.post<{ message: string }>(link, patient)
      .subscribe((responseData) => {
        console.log(responseData)
      })
  }

  async listPatient(): Promise<Patient[]> {
    const link = BACKEND_URL
    return this.http.get(link)
      .toPromise()
      .then(result => {
        const patients = result as Patient[]
        return patients.map(patient => {
          return {
            ...patient,
            gender: patient.gender === "M" ? "Masculino" : 'Feminino'
          }
        })
      })
  }

  async deletePatient(patient: Patient): Promise<boolean> {
    const link = `${BACKEND_URL}/${patient.id}`
    return this.http.delete(link)
      .toPromise()
      .then(result => {
        return !!result
      })
  }

  async updatePatient(patient: Patient): Promise<boolean> {
    const link = `${BACKEND_URL}/${patient.id}`
    return this.http.put(link, patient)
      .toPromise()
      .then(result => {
        console.log(result)
        return !!result
      })
  }

}
