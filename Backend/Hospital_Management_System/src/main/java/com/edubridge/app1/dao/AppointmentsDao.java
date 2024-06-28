package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Appointments;
import com.edubridge.app1.repo.AppointmentsRepository;

@Repository
public class AppointmentsDao {
	@Autowired
	private AppointmentsRepository repo;
	
	public Appointments saveAppointment(Appointments ap) {
		return repo.save(ap);
	}
	public List<Appointments> getAppointments(){
		return repo.findAll();
	}
	public Appointments getAppointment(Integer patientAppointmentId) {
		return repo.findById(patientAppointmentId).get();
	}
	public void updateAppointments(Appointments ap) {
		repo.save(ap);
	}
	public void deleteAppointment(Integer paientAppointmentId) {
		repo.deleteById(paientAppointmentId);
	}

}
