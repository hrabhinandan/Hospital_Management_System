import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userFormGroup:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private service:UserService,
    private router:Router
  ){}

  ngOnInit(){
    this.userFormGroup=this.formBuilder.group({
      userName :['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      userAge :['',[Validators.required]],
      userGender:['',[Validators.required]],
      userMobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      userDescription:['',[Validators.required,Validators.maxLength(50)]],
      emailId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(30)]]
    
    })
  }
  addUser(){
    if(this.userFormGroup.valid){
      this.service.createUser(this.userFormGroup.value).subscribe((data) => {
        alert("New User Added successfully!!");
        this.router.navigateByUrl('users-details');
      });
    }else{
      alert('Invalid');
    }
  }

}
