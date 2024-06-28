import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admins } from '../common/admins';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl:string="http://localhost:8181/myapp/admin";

  constructor(private http:HttpClient) { }

  getAdminUser(data: Admins): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data)
  }
}
