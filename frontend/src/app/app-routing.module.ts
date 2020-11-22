import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create-patient', component: CreatePatientComponent, canActivate: [AuthGuard] },
  { path: 'create-doctor', component: CreateDoctorComponent, canActivate: [AuthGuard] },
  { path: 'list-doctor', component: ListDoctorsComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
