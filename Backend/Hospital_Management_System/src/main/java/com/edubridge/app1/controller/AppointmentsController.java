package com.edubridge.app1.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Appointments;
import com.edubridge.app1.service.AppointmentsService;

@CrossOrigin("*")
@RestController
@RequestMapping
public class AppointmentsController {
	@Autowired
	private AppointmentsService service;
	
	@PostMapping("/appointment")
	public ResponseEntity<Appointments> save(@RequestBody Appointments appointment){
		Appointments saveAppointments = service.saveAppointments(appointment);
		return new ResponseEntity<>(saveAppointments,HttpStatus.OK);
	}
	
	@GetMapping("/appointment")
	public ResponseEntity<List<Appointments>> getallAppointments(){
		List<Appointments> appointments=service.getAppointments();
		return new ResponseEntity<>(appointments,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/appointment/{id}")
		public ResponseEntity<Appointments> getOneAppointment(@PathVariable ("id")Integer patientAppointmentId ){
		Appointments appointment =service.getAppointment(patientAppointmentId);
		return new ResponseEntity<Appointments>(appointment,HttpStatus.OK);
	}
	
	@DeleteMapping("/appointment/{id}")
	public ResponseEntity<Appointments> deleteAppointment(@PathVariable ("id") Integer patientAppointmentId){
		service.deleteAppointments(patientAppointmentId);
		return new ResponseEntity<Appointments>(HttpStatus.OK);

}
	@PutMapping("/appointment")
	public ResponseEntity<Appointments> updateAppointment(@RequestBody Appointments appointments){
		service.updateAppointments(appointments);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
