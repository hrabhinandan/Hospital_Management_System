import { DoctorDepartment } from "./doctor-department";

export class Doctor {
    doctorId:number;
    //deptId:number;
    doctorName:string;
    doctorSchedule:string;
    emailId:string;
    doctorMobile:number;
    password:string;
    department: DoctorDepartment;
    
}
