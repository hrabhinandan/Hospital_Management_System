package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.DoctorDepartment;
import com.edubridge.app1.repo.DoctorDepartmentRepository;

@Repository
public class DoctorDepartmentDao {
	@Autowired
	private DoctorDepartmentRepository repo;
	public DoctorDepartment saveDoctorDepartment(DoctorDepartment dd) {
		return repo.save(dd);
	}
	public List<DoctorDepartment> getDoctorDepartment(){
		return repo.findAll();
	}
	public DoctorDepartment getDoctorDepartment(Integer deptId) {
		return repo.findById(deptId).get();
	}
	public void updateDoctorDepartment(DoctorDepartment dd) {
		repo.save(dd);
		
	}
	public void deleteDoctorDepartment(Integer deptId) {
		repo.deleteById(deptId);
	}

}
