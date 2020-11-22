import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { MatListModule } from '@angular/material/list'
import { CdkTableModule } from '@angular/cdk/table'
import { MatDividerModule } from '@angular/material/divider'

import { ChronicDiseasesComponent } from './components/chronic-diseases/chronic-diseases.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component'
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterInputComponent } from './components/register-input/register-input.component'
import { AuthInterceptor } from './services/auth/auth-interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { SwitchComponentsComponent } from './components/switch-components/switch-components.component';
import { DeleteDoctorsComponent } from './components/delete-doctors/delete-doctors.component';
import { ShowDoctorComponent } from './components/show-doctor/show-doctor.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { UpdateDoctorDetailComponent } from './components/update-doctor-detail/update-doctor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreatePatientComponent,
    ChronicDiseasesComponent,
    CreateDoctorComponent,
    HomeComponent,
    RegisterInputComponent,
    AdminComponent,
    ListDoctorsComponent,
    SwitchComponentsComponent,
    DeleteDoctorsComponent,
    ShowDoctorComponent,
    DoctorDetailsComponent,
    UpdateDoctorComponent,
    UpdateDoctorDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatListModule,
    CdkTableModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
