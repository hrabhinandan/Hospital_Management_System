import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorDepartmentComponent } from './components/doctor-department/doctor-department.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';

import { DoctorsComponent } from './components/doctors/doctors.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CardiologistComponent } from './components/cardiologist/cardiologist.component';
import { GeneralSurgeonComponent } from './components/general-surgeon/general-surgeon.component';
import { NeurologistComponent } from './components/neurologist/neurologist.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { AppointmentsPageComponent } from './components/appointments-page/appointments-page.component';
import { AddAppointmentsComponent } from './components/add-appointments/add-appointments.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    AboutUsComponent,
    LoginComponent,
    UserRegistrationComponent,
    AdminComponent,
    DoctorDepartmentComponent,
    UserDetailsComponent,
    AdminDetailsComponent,
    AppointmentsListComponent,
 
    DoctorsComponent,
       SearchComponent,
       DoctorLoginComponent,
       UserLoginComponent,
       AdminLoginComponent,
       CardiologistComponent,
       GeneralSurgeonComponent,
       NeurologistComponent,
       HomePageComponent,
       AdminPageComponent,
       UserPageComponent,
       DoctorPageComponent,
       AppointmentsPageComponent,
       AddAppointmentsComponent,
       SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
