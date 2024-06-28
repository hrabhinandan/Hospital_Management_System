import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointments } from '../common/appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  baseUrl:string="http://localhost:8181/myapp/appointment";

  constructor(private http :HttpClient) { }


  getAppointments(): Observable<Appointments[]>{
    return this.http.get<Appointments[]>(this.baseUrl);
  }
  createAppointment(appointment :Appointments):Observable<Appointments>{
    return this.http.post<Appointments>(this.baseUrl,appointment);
  }

  deleteAppointment(id:number):Observable<any>{
    return this.http.delete(this.baseUrl + '/' + id)
  }

  getAppointment(id:number):Observable<Appointments>{
    return this.http.get<Appointments>(this.baseUrl + '/' + id);
  }

  updateUser(appointment: Appointments):Observable<any>{
    return this.http.put(this.baseUrl,appointment)
  }
}
