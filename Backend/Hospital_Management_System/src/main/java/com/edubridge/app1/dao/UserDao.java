package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.User;
import com.edubridge.app1.repo.UserRepository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository repo;
	
	public User saveUsers(User u) {
		return repo.save(u);
	}
	public List<User> getUsers(){
		return repo.findAll();
	}
	public User getUser(Integer userId) {
		return repo.findById(userId).get();
	}
	public void updateUser(User u) {
		repo.save(u);
	}
	public void deleteUser(Integer userId) {
		repo.deleteById(userId);
	}
	public User getByMail(String emailId) {
		return repo.findByEmailId(emailId);
		
	}
	

}
