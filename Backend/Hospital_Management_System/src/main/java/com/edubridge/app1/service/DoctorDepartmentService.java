package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.DoctorDepartmentDao;
import com.edubridge.app1.model.DoctorDepartment;

@Service
public class DoctorDepartmentService {
	@Autowired
	private DoctorDepartmentDao dao;
	
	public DoctorDepartment saveDoctorDepartment(DoctorDepartment dd) {
		return dao.saveDoctorDepartment(dd);
	}
	public List<DoctorDepartment> getDoctorDepartment(){
		return dao.getDoctorDepartment();
	}
	public DoctorDepartment getDoctorDepartmentById(Integer deptId) {
		return dao.getDoctorDepartment(deptId);
	}
	public void updateDoctorDepartment(DoctorDepartment dd) {
		dao.updateDoctorDepartment(dd);
	}
	public void deleteDoctorDepartment(Integer deptId) {
		dao.deleteDoctorDepartment(deptId);
	}

}
