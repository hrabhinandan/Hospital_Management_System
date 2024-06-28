package com.edubridge.app1.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Doctor;
import com.edubridge.app1.model.DoctorDepartment;
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
	List<Doctor> findByDepartment(DoctorDepartment department);
	List<Doctor> findBydoctorNameContaining(String doctorName);
	Doctor findByEmailId(String emailId);
	
	
}
