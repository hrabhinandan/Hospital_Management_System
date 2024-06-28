import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admins } from '../../common/admins';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  storage:Storage=localStorage
  constructor(private service:AdminService,private router:Router){}
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
        let admin:Admins=new Admins()

        admin.emailId=this.loginForm.value.email
        admin.password=this.loginForm.value.password

        this.service.getAdminUser(admin).subscribe(data => {
          console.log(data)
          this.service.getAdminUser(admin).subscribe()
          this.storage.setItem('currentAdminUser',JSON.stringify({email:this.emailId?.valid}));
          alert("logged in")
          this.router.navigate(['/admin-page'])
        },
        error =>{
          alert("Invalid credentials")
        }
        )
      }
  }
 

}
