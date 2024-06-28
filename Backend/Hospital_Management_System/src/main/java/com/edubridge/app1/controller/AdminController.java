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

import com.edubridge.app1.model.Admin;
import com.edubridge.app1.service.AdminService;

@CrossOrigin("*")
@RestController
@RequestMapping
public class AdminController {
	@Autowired
	private AdminService service;
	
	@PostMapping("/admin")
	public ResponseEntity<Admin> save(@RequestBody Admin admin){
		Admin saveAdmin = service.saveAdmin(admin);
		return new ResponseEntity<>(saveAdmin,HttpStatus.OK);
	}
	
	@GetMapping("/admin")
	public ResponseEntity<List<Admin>> getallAdmins(){
		List<Admin>admins=service.getAdmins();
		return new ResponseEntity<>(admins,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/admin/{id}")
		public ResponseEntity<Admin> getOneAdmin(@PathVariable ("id")Integer adminId ){
		Admin admin =service.getAdmin(adminId);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
	
	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Admin> deleteAdmin(@PathVariable ("id")Integer adminId){
		service.deleteAdmin(adminId);
		return new ResponseEntity<Admin>(HttpStatus.OK);
	}
	
	@PutMapping("/admin")
	public ResponseEntity<Admin> update(@RequestBody Admin admin){
		service.updateAdmin(admin);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/admin/valid")
	public Admin login(@RequestBody Admin admin)throws Exception{
		return this.service.login(admin.getEmailId(), admin.getPassword());
	}
	
	

}
