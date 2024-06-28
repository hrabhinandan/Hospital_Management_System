import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../common/users';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  storage:Storage=localStorage
  constructor(private service:UserService,private router:Router){}
  loginForm =new FormGroup({
    email : new FormControl('',[Validators.required,Validators.maxLength(30)]),
    password:new FormControl('',[Validators.required,Validators.maxLength(30)])
  });
  login(insert:any){
    console.log(this.loginForm)
  } 
 
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
        let user:Users=new Users()

        user.emailId=this.loginForm.value.email
        user.password=this.loginForm.value.password

        this.service.getPatientUser(user).subscribe(data => {
          console.log(data)
          this.service.getPatientUser(user).subscribe()
          this.storage.setItem('currentPatientUser',JSON.stringify({email:this.emailId?.valid}));
          alert("logged in")
          this.router.navigate(['/user-page'])
        },
        error =>{
          alert("Invalid credentials")
        }
        )
      }
  }
 

}

