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

import com.edubridge.app1.model.Doctor;
import com.edubridge.app1.model.DoctorDepartment;
import com.edubridge.app1.service.DoctorDepartmentService;
import com.edubridge.app1.service.DoctorService;


@CrossOrigin(origins="http://localhost:4200/" )
@RestController
@RequestMapping
public class DoctorController {
	@Autowired
	
	private DoctorService service;

	@Autowired
	private DoctorDepartmentService departmentService;
	
	@PostMapping("/doctor")
	public ResponseEntity<Doctor> save(@RequestBody Doctor doctor){
		Doctor saveDoctor = service.saveDoctor(doctor);
		return new ResponseEntity<>(saveDoctor,HttpStatus.OK);
	}
	
	@GetMapping("/doctor")
	public ResponseEntity<List<Doctor>> getallDoctors(){
		List<Doctor> doctors=service.getDoctors();
		return new ResponseEntity<>(doctors,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/doctor/{id}")
		public ResponseEntity<Doctor> getOneDoctor(@PathVariable ("id")Integer doctorId ){
		Doctor doctor =service.getDoctor(doctorId);
		return new ResponseEntity<Doctor>(doctor,HttpStatus.OK);
	}
	
	@DeleteMapping("/doctor/{id}")
	public ResponseEntity<Doctor> deleteDoctor(@PathVariable ("id")Integer doctorId){
		service.deleteDoctor(doctorId);
		return new ResponseEntity<Doctor>(HttpStatus.OK);
	}
	
	@PutMapping("/doctor")
	public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor){
		service.updateDoctor(doctor);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	@GetMapping("/doctor/doctorsByDepartments/{deptId}")
	public ResponseEntity<List<Doctor>>getDoctorByDepartments(@PathVariable Integer deptId){
		DoctorDepartment departments=departmentService.getDoctorDepartmentById(deptId);
		List<Doctor> doctors=service.getDoctorByDepartment(departments);
		return new ResponseEntity<>(doctors,HttpStatus.OK);
		
	}
	
	@GetMapping("/doctor/search/{doctorName}")
	public ResponseEntity<List<Doctor>>getdoctorNameContainingdoctor(@PathVariable String doctorName){
		List<Doctor> doctors=service.getDoctor(doctorName);
		

		return new ResponseEntity<>(doctors,HttpStatus.OK);
	}
	
	@PostMapping("/doctor/valid")
	public Doctor login(@RequestBody Doctor doctor)throws Exception {
		return this.service.login(doctor.getEmailId(),doctor.getPassword());
		
	}
	

}
