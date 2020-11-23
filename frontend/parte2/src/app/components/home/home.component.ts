import { Router } from '@angular/router';
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
  patientToUpdate!: Patient

  columnsToDisplay: string[] = ['id', 'name', 'birthDate', 'gender']
  expandedElement!: Patient | null;
  dataSource: MatTableDataSource<Patient> = new MatTableDataSource(this.patients)
  showList: boolean = true

  constructor(private patientService: PatientService, private router: Router) { }
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
    this.patientToUpdate = patient
    this.showList = !this.showList
  }


  async initializeData() {
    this.patients = await this.patientService.listPatient()
    this.dataSource = new MatTableDataSource(this.patients)
    this.dataSource.paginator = this.paginator
  }

  async recivePatient(patient: Patient) {
    const validate = await this.patientService.updatePatient(patient)
      .then(result => {
        return result
      })

    if (validate) {
      await this.initializeData()
      this.showList = validate
    }

  }

}
