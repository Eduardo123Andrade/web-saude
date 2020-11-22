import { Patient } from './../../models/Patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";

const BACKEND_URL = environment.apiUrl + "/patient/"


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
}
