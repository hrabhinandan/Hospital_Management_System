package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.DoctorDao;
import com.edubridge.app1.dao.DoctorDepartmentDao;
import com.edubridge.app1.model.Doctor;
import com.edubridge.app1.model.DoctorDepartment;

@Service
public class DoctorService {
	@Autowired
	private DoctorDao dao;
	
	@Autowired
	private DoctorDepartmentDao department_Dao;
	
	public Doctor saveDoctor(Doctor d) {
		return dao.saveDoctor(d);
	} 
	public List<Doctor> getDoctors(){
		return dao.getDoctors();
	}
	public Doctor getDoctor(Integer doctorId) {
		return dao.getDoctor(doctorId);
	}
	public void updateDoctor(Doctor d) {
		dao.updateDoctor(d);
	}
	public void deleteDoctor(Integer doctorId) {
		dao.deleteDoctor(doctorId);
	}
	public List<Doctor> getDoctorByDepartment(DoctorDepartment department){
		return dao.getDoctorByDepartment(department);
	}
	public List<Doctor> getDoctor(String doctorName){
		return dao.getDoctors(doctorName);
	}
	public Doctor login(String emailId,String password)throws Exception {
		Doctor doctor=dao.getByMail(emailId);
		if(doctor.getEmailId().equals(emailId)&&doctor.getPassword().equals(password)) {
			return doctor;
		}else {
			throw new Exception("Invalid Credentials");
		}
	}

}
