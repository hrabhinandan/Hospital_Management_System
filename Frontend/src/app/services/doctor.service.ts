import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../common/doctor';
import { Observable, map } from 'rxjs';
import { DoctorDepartment } from '../common/doctor-department';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl:string="http://localhost:8181/myapp/doctor";

  departmentUrl ="http://localhost:8181/myapp/department";

  


  constructor(private http :HttpClient) { }

  getDoctorList(thedepartmentId : number | null | string):Observable<Doctor[]>{
    const searchUrl =`${this.baseUrl}/doctorsByDepartments/${thedepartmentId}`
    return this.http.get<Doctor[]>(this.departmentUrl);
  } 
  getDoctorDepartments():Observable<DoctorDepartment[]>{
    return this.http.get<DoctorDepartment[]>(this.departmentUrl)
  }

  searchDoctors(theKeyword : string | null):Observable<Doctor[]>{
    const searchUrl=`${this.baseUrl}/search/${theKeyword}`
    return this.http.get<Doctor[]>(searchUrl)
  }

  getDoctor(thedoctorId: number | string | null):Observable<Doctor>{
    const doctorUrl=`${this.baseUrl}/${thedoctorId}`
    return this.http.get<Doctor>(doctorUrl);
  }
  getdoc():Observable<Doctor[]>{
   return this.http.get<Doctor[]>(this.baseUrl);
  }
  getDoctorUser(data: Doctor): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data)
  }
  createDoctor(doctor :Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(this.baseUrl,doctor);
  }
 
  

  




}
interface GetResponseDoctors{
  doctors : Doctor[];
}

interface GetResponseDepartments{
  doctorDepartment:DoctorDepartment[];
}
 