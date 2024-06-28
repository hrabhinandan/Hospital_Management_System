package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Admin;
import com.edubridge.app1.repo.AdminRepository;
@Repository
public class AdminDao {
	@Autowired
	private AdminRepository repo;
	public Admin saveAdmin(Admin a) {
		return repo.save(a);
	}
	public List<Admin> getAllAdmins(){
		return repo.findAll();
	}
	public Admin getAdmin(Integer adminId) {
		return repo.findById(adminId).get();
	}
	public void updateAdmin(Admin a) {
		repo.save(a);
	}
	public void deleteAdmin(Integer adminId) {
		repo.deleteById(adminId);
	}
	public Admin getAdminByMail(String mailId) {
		return repo.findByEmailId(mailId);
	}

}
