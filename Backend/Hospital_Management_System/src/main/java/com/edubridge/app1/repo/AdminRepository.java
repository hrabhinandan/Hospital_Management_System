package com.edubridge.app1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	Admin findByEmailId(String mailId);

}
