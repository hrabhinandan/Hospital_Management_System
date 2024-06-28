package com.edubridge.app1.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "appointment_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointments {
	@Id
	@GeneratedValue
	private Integer patientAppointmentId;

	private String appointmentDate,appointmentTime;
	
	
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	@ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY)
	@JoinColumn(name="doctorId")
	private Doctor doctor;
	
	
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	@ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY)
	@JoinColumn(name="userId")
	private User user;

	

	
}
