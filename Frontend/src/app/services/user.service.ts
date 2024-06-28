import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../common/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:8181/myapp/user";

  

  constructor(private http:HttpClient) { }
  getuser():Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl);
  }
  
  createUser(user :Users):Observable<Users>{
    return this.http.post<Users>(this.baseUrl,user);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.baseUrl + '/' + id)
  }

  getUser(id:number):Observable<Users>{
    return this.http.get<Users>(this.baseUrl + '/' + id);
  }

  updateUser(user: Users):Observable<any>{
    return this.http.put(this.baseUrl,user)
  }
  getPatientUser(data: Users): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data)
  }
}
