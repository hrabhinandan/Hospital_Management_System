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

import com.edubridge.app1.model.DoctorDepartment;
import com.edubridge.app1.service.DoctorDepartmentService;

@CrossOrigin("*")
@RestController
@RequestMapping
public class DoctorDepartmentController {
	@Autowired
	private DoctorDepartmentService service;
	
	@PostMapping("/department")
	public ResponseEntity<DoctorDepartment> save(@RequestBody DoctorDepartment department){
		DoctorDepartment saveDoctorDepartment=service.saveDoctorDepartment(department);
		return new ResponseEntity<>(saveDoctorDepartment,HttpStatus.OK);
	}
	
	@GetMapping("/department")
	public ResponseEntity<List<DoctorDepartment>> getallDoctorDepartments(){
		List<DoctorDepartment> departments=service.getDoctorDepartment();
		return new ResponseEntity<>(departments,HttpStatus.OK);
	}
	
	@GetMapping("/department/{id}")
	public ResponseEntity<DoctorDepartment> getOneDepartment(@PathVariable ("id") Integer deptId){
		DoctorDepartment doctordept=service.getDoctorDepartmentById(deptId);
		return new ResponseEntity<DoctorDepartment>(doctordept,HttpStatus.OK);
	}
	
	@DeleteMapping("/department/{id}")
	public ResponseEntity<DoctorDepartment> deleteDoctorDepartment(@PathVariable ("id") Integer deptId){
		service.deleteDoctorDepartment(deptId);
		return new ResponseEntity<DoctorDepartment>(HttpStatus.OK);
	}
	
	@PutMapping("/department")
	public ResponseEntity<DoctorDepartment> updateDoctorDepartment(@RequestBody DoctorDepartment department){
		service.updateDoctorDepartment(department);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
