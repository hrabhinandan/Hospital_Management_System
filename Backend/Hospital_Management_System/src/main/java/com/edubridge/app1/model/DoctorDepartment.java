package com.edubridge.app1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctor_Dept")
public class DoctorDepartment {
	
	@Id
	@GeneratedValue
	private Integer deptId;
	
	private String deptName;

	public DoctorDepartment() {
		super();
	}

	public DoctorDepartment(Integer deptId, String deptName) {
		super();
		this.deptId = deptId;
		this.deptName = deptName;
	}

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	@Override
	public String toString() {
		return "DoctorDepartment [deptId=" + deptId + ", deptName=" + deptName + "]";
	}
	
	//@OneToMany(cascade = CascadeType.ALL,mappedBy = "department")
	//private Set<Doctor> doctors;

	

	
	


}
