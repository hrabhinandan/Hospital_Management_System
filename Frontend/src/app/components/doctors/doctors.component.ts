import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  doctorFormGroup:FormGroup;
  deptFormGroup:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private service:DoctorService,
    private router:Router
  ){}

  ngOnInit(){
    this.doctorFormGroup=new FormGroup({
      doctorName:new FormControl(['']),
      doctorSchedule:new FormControl(['']),
      doctorMobile:new FormControl(['']),
      emailId:new FormControl(['']),
      password:new FormControl(['']),
      department:new FormGroup({
        deptId: new FormControl([''])
      })
     

    })
      
   
  }
  addDoctors(){
    if(this.doctorFormGroup.valid){
      this.service.createDoctor(this.doctorFormGroup.value).subscribe((data) => {
        alert("New Doctor Added successfully!!");
        this.router.navigateByUrl('doctor-list');
      });
    }else{
      alert('Invalid');
    }
  }

}




