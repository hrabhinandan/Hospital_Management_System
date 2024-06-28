package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.UserDao;
import com.edubridge.app1.model.User;

@Service
public class UserService {
	@Autowired
	private UserDao dao;
	public User saveUser(User u) {
		return dao.saveUsers(u);
	} 
	public List<User> getUsers(){
		return dao.getUsers();
	}
	public User getUser(Integer userId) {
		return dao.getUser(userId);
	}
	public void updateUser(User u) {
		dao.updateUser(u);
	}
	public void deleteUser(Integer userId) {
		dao.deleteUser(userId);
	}
	public User login(String emailId,String password)throws Exception {
		User user=dao.getByMail(emailId);
		if(user.getEmailId().equals(emailId)&&user.getPassword().equals(password)) {
			return user;
		}else {
			throw new Exception("Invalid Credentials");
		}
	}
	
	

}
