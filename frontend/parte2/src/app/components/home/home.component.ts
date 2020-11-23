import { element } from 'protractor';
import { Patient } from './../../models/Patient';
import { PatientService } from './../../services/patient/patient.service';
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  patients: Patient[] = []
  columnsToDisplay: string[] = ['id', 'name', 'birthDate', 'gender']
  expandedElement!: Patient | null;
  dataSource: MatTableDataSource<Patient> = new MatTableDataSource(this.patients)

  constructor(private patientService: PatientService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  async ngOnInit() {
    await this.initializeData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async delete(patient: Patient) {
    const result = await this.patientService.deletePatient(patient)
    if (result) {
      await this.initializeData()
    }
  }

  async update(patient: Patient) {
    const result = await this.patientService.deletePatient(patient)
    if (result) {
      await this.initializeData()
    }
  }


  async initializeData() {
    this.patients = await this.patientService.listPatient()
    this.dataSource = new MatTableDataSource(this.patients)
    this.dataSource.paginator = this.paginator
  }

}
