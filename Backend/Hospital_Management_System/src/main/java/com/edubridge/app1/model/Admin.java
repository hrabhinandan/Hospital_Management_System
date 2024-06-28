package com.edubridge.app1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "admin_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {
	@Id
	@GeneratedValue
	private Integer adminId;
	private String adminName;
	private String emailId;
	private Long adminMobile;
	private String password;
	public Integer getAdminId() {
		return adminId;
	}
	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public Long getAdminMobile() {
		return adminMobile;
	}
	public void setAdminMobile(Long adminMobile) {
		this.adminMobile = adminMobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
