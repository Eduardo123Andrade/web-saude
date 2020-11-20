import { LoginComponent } from './components/login/login.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create-patient', component: CreatePatientComponent },
  {path: 'create-doctor', component: CreateDoctorComponent },
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
