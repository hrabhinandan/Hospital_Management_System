import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentsService } from '../../services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrl: './add-appointments.component.css'
})
export class AddAppointmentsComponent {
  appointmentFormGroup:FormGroup;
  doctorFormGroup:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private service:AppointmentsService,
    private router:Router
  ){}

  ngOnInit(){
    this.appointmentFormGroup=new FormGroup({
      appointmentDate:new FormControl(['']),
      appointmentTime:new FormControl(['']),
      doctor:new FormGroup({
        doctorId: new FormControl([''])
      }),
      user:new FormGroup({
        userId: new FormControl([''])
      })

    })
      
   
  }
  addAppointments(){
    if(this.appointmentFormGroup.valid){
      this.service.createAppointment(this.appointmentFormGroup.value).subscribe((data) => {
        alert("New Appointment Added successfully!!");
        this.router.navigateByUrl('appointments-list');
      });
    }else{
      alert('Invalid');
    }
  }

}

