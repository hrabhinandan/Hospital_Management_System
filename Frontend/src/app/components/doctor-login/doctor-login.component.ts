import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../../common/doctor';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent {
  storage:Storage=localStorage
  constructor(private service:DoctorService,private router:Router){}
  loginForm =new FormGroup({
    email : new FormControl('',[Validators.required,Validators.maxLength(30)]),
    password:new FormControl('',[Validators.required,Validators.maxLength(30)])
  });
  login(insert:any){
    console.log(this.loginForm)
  }
 // get adminId(){
   // return this.loginForm.get('adminId');
  //}
  get emailId(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  submit(){
    if(this.emailId?.value?.length === 0 || this.password?.value?.length == 0 || this.emailId?.invalid || this
      .password?.invalid){
        alert("enter valid details")
      }
      else{
        alert(JSON.stringify(this.loginForm.value))
        let doctor:Doctor=new Doctor()

        doctor.emailId=this.loginForm.value.email
        doctor.password=this.loginForm.value.password

        this.service.getDoctorUser(doctor).subscribe(data => {
          console.log(data)
          this.service.getDoctorUser(doctor).subscribe()
          this.storage.setItem('currentDoctorUser',JSON.stringify({email:this.emailId?.valid}));
          alert("logged in")
          this.router.navigate(['/doctor-page'])
        },
        error =>{
          alert("Invalid credentials")
        }
        )
      }
  }
 

}


