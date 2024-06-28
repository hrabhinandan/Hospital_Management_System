package com.edubridge.app1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmailId(String emailId);

}
