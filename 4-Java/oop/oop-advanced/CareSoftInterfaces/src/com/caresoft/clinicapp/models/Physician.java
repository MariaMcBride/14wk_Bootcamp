package com.caresoft.clinicapp.models;

import java.util.ArrayList;
import java.util.Date;

import com.caresoft.clinicapp.HIPAACompliantUser;

public class Physician extends User implements HIPAACompliantUser {

	// Inside class:    
    private ArrayList<String> patientNotes;
    
    // TO DO: Constructor that takes an ID    
	public Physician(Integer id) {
		super(id);
		this.patientNotes = new ArrayList<String>();
	}
	
	// TO DO: Implement HIPAACompliantUser!
	@Override	
	public boolean assignPin(int pin) {
		if (Integer.toString(pin).length() == 4) {
			super.setPin(pin);
			return true;
		} else return false;
	}
	
	@Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
    	return super.getId().equals(confirmedAuthID) ?
    		true : false;
    }
	    		
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }
		
	// TO DO: Setters & Getters
	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}

}
