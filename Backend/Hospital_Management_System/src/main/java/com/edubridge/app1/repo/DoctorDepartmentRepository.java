package com.edubridge.app1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.DoctorDepartment;
@Repository
public interface DoctorDepartmentRepository  extends JpaRepository<DoctorDepartment,Integer >{

}
