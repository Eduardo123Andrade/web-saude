import { Injectable } from '@angular/core';
import { Doctor } from './../../models/Doctor';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";

const BACKEND_URL = environment.apiUrl + "/doctor/"


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }


  createNewDoctor(doctor: Doctor) {
    const link = BACKEND_URL
    this.http.post<{ message: string }>(link, doctor)
      .subscribe((responseData) => {
        console.log(responseData)
      })
  }


  // async listDoctors() {
  async listDoctors(): Promise<Doctor[]> {
    const link = BACKEND_URL
    return this.http.get(link)
      .toPromise()
      .then(result => {
        const doctors = result as Doctor[]
        return doctors.map(doctor => {
          return {
            id: doctor.id,
            name: doctor.name,
            crm: doctor.crm
          }
        })
      })
  }

}