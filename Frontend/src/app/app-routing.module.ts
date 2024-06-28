import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorDepartmentComponent } from './components/doctor-department/doctor-department.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { AddAppointmentsComponent } from './components/add-appointments/add-appointments.component';
import { AppointmentsPageComponent } from './components/appointments-page/appointments-page.component';
import { CardiologistComponent } from './components/cardiologist/cardiologist.component';
import { GeneralSurgeonComponent } from './components/general-surgeon/general-surgeon.component';
import { NeurologistComponent } from './components/neurologist/neurologist.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path : 'doctor-page',component:DoctorPageComponent},
  {path : 'cardiologist',component:CardiologistComponent},
  {path : 'general-surgeon',component:GeneralSurgeonComponent},
  {path :'neurologist',component:NeurologistComponent},
  {path:'appointments-page',component:AppointmentsPageComponent},
  {path : 'add-appointments',component:AddAppointmentsComponent},
  {path : 'admin-page',component:AdminPageComponent},
  {path : 'user-page',component:UserPageComponent},
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  {path : 'users-details',component:UserDetailsComponent},
  {path : 'search/:keyword',component:DoctorListComponent},
  {path : 'doctors',component:DoctorsComponent},
  {path : 'doctor-list',component:DoctorListComponent},
  {path : 'about-us',component:AboutUsComponent},
  {path : 'login',component:LoginComponent},
  {path : 'doctor-department',component:DoctorListComponent},
  {path : 'user-registration',component:UserRegistrationComponent},
  {path : 'appointments-list',component:AppointmentsListComponent},
  {path : 'home-page',component:HomePageComponent},
  {path : 'sign-up',component:SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
