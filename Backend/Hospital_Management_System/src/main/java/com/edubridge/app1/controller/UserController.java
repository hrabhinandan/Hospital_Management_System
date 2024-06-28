package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.User;
import com.edubridge.app1.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping
public class UserController {
	
	@Autowired
	private UserService service;
	@PostMapping("/user")
	public ResponseEntity<User> save(@RequestBody User user){
		User saveUser = service.saveUser(user);
		return new ResponseEntity<>(saveUser,HttpStatus.OK);
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getallUsers(){
		List<User>users=service.getUsers();
		return new ResponseEntity<>(users,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/user/{id}")
		public ResponseEntity<User> getOneUser(@PathVariable ("id")Integer userId ){
		User user =service.getUser(userId);
		return new ResponseEntity<User>(user,HttpStatus.OK);
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable ("id")Integer userId){
		service.deleteUser(userId);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
	
	@PutMapping("/user")
	public ResponseEntity<User> updateUser(@RequestBody User user){
		service.updateUser(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@PostMapping("/user/valid")
	public User login(@RequestBody User user)throws Exception{
		return this.service.login(user.getEmailId(), user.getPassword());
	}

}
