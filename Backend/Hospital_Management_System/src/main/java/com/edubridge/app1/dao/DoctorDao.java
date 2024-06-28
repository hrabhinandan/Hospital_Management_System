package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Doctor;
import com.edubridge.app1.model.DoctorDepartment;
import com.edubridge.app1.repo.DoctorDepartmentRepository;
import com.edubridge.app1.repo.DoctorRepository;

@Repository
public class DoctorDao {
	@Autowired
	private DoctorRepository repo;
	
	@Autowired
	private DoctorDepartmentRepository departmentRepo;
	
	public Doctor saveDoctor(Doctor d) {
		return repo.save(d);
	}
	public List<Doctor> getDoctors(){
		return repo.findAll();
	}
	public Doctor getDoctor(Integer doctorId) {
		return repo.findById(doctorId).get();
	}
	public void updateDoctor(Doctor d) {
		repo.save(d);
	}
	public void deleteDoctor(Integer doctorId) {
		repo.deleteById(doctorId);
	}
	public List<Doctor> getDoctorByDepartment(DoctorDepartment department){
		
		return repo.findByDepartment(department);
	}
	public List<Doctor> getDoctors(String doctorName){
		return repo.findBydoctorNameContaining(doctorName);
	}
	
	public Doctor getByMail(String emailId) {
		return repo.findByEmailId(emailId);
	}
	}

