import { HttpErrorHandler, HttpErrorRequest } from '../../errors/HttpErrorHandler';
import { Injectable } from '@angular/core';
import { Doctor } from './../../models/Doctor';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";

const BACKEND_URL = environment.apiUrl + "/doctors"

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }


  async createNewDoctor(doctor: Doctor): Promise<{ message: string }> {
    const link = BACKEND_URL
    return this.http.post<{ message: string }>(link, doctor)
      .toPromise()
      .then((responseData) => {
        return {
          message: responseData.message
        }
      })
      .catch(err => {
        throw new HttpErrorHandler({
          isError: true,
          errorMessage: err.error.message,
          status: err.status
        })
      })
  }


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

  async deleteDoctor(doctor: Doctor): Promise<boolean> {
    const link = `${BACKEND_URL}/${doctor.crm}`
    return await this.http.delete<{ message: string, deleted?: boolean }>(link)
      .toPromise()
      .then(result => {
        return !!result.deleted
      })
      .catch(err => {
        throw new HttpErrorHandler({
          isError: true,
          errorMessage: err.error.message,
          status: err.status
        })
      })
  }


  async searchDoctor(doctor: Doctor): Promise<Doctor> {
    const link = `${BACKEND_URL}/${doctor.crm}`
    return this.http.get(link)
      .toPromise()
      .then(result => {
        const doctor: Doctor = result as Doctor
        return {
          id: doctor.id,
          crm: doctor.crm,
          name: doctor.name
        }
      })
      .catch(err => {
        throw new HttpErrorHandler({
          isError: true,
          errorMessage: err.error.message,
          status: err.status
        })
      })
  }

  async updateDoctor(crm: string, doctor: Doctor): Promise<boolean> {
    const link = `${BACKEND_URL}/${crm}`
    return this.http.put<{ message: string, doctor: Doctor }>(link, doctor)
      .toPromise()
      .then(result => {
        console.log(result.message)
        return !!result.doctor
      })
      .catch(err => {
        throw new HttpErrorHandler({
          isError: true,
          errorMessage: err.error.message,
          status: err.status
        })
      })
  }


}