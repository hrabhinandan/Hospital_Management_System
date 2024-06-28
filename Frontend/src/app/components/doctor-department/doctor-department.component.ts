import { Component } from '@angular/core';
import { DoctorDepartment } from '../../common/doctor-department';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-department',
  templateUrl: './doctor-department.component.html',
  styleUrl: './doctor-department.component.css'
})
export class DoctorDepartmentComponent {
  doctorDepartments : DoctorDepartment[];

  constructor(private DoctorService:DoctorService){}

  ngOnInit(){
    this.listDoctorDepartments();
  }

  listDoctorDepartments(){
    this.DoctorService.getDoctorDepartments().subscribe(
      (data) =>
      {
        this.doctorDepartments=data;
      }
    )
  }



  

}
