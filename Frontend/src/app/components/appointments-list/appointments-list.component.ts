import { Component } from '@angular/core';
import { Appointments } from '../../common/appointments';
import { AppointmentsService } from '../../services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css'
})
export class AppointmentsListComponent {

  appointment : Appointments[]=[];

  constructor(private service:AppointmentsService,private router:Router){}

  ngOnInit(){
    this.diplayAppointments();
  }


  diplayAppointments(){
    this.service.getAppointments().subscribe((data) => {
      console.log(data);
      this.appointment=data;
    })
  }

}
