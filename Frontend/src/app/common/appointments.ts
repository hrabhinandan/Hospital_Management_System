import { Doctor } from "./doctor";
import { Users } from "./users";

export class Appointments {
    patientAppointmentId:number;
    appointmentDate:string;
    appointmentTime:string;
    //userId:number;
    //doctorId:number;
    user:Users;
    doctor:Doctor;
}
