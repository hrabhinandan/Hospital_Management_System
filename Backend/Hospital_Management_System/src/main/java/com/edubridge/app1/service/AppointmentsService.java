package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.AppointmentsDao;
import com.edubridge.app1.model.Appointments;

@Service
public class AppointmentsService {
	@Autowired
	private AppointmentsDao dao;
	
	public Appointments saveAppointments(Appointments ap) {
		return dao.saveAppointment(ap);
	} 
	public List<Appointments> getAppointments(){
		return dao.getAppointments();
	}
	public Appointments getAppointment(Integer patientAppointmentId) {
		return dao.getAppointment(patientAppointmentId);
	}
	public void updateAppointments(Appointments ap) {
		dao.updateAppointments(ap);
	}
	public void deleteAppointments(Integer patientAppointmentId) {
		dao.deleteAppointment(patientAppointmentId);
	}
	

}
