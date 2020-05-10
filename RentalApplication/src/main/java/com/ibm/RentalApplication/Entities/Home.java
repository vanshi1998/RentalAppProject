package com.ibm.RentalApplication.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Home {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String type;
	String location;
	String occupancy;
	String status;
	String furnished;
	double monthlyCost;
	double securityDeposit;
	int rooms;
	String details;
	String detailedLocation;
	int ownerId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getOccupancy() {
		return occupancy;
	}
	public void setOccupancy(String occupancy) {
		this.occupancy = occupancy;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getFurnished() {
		return furnished;
	}
	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}
	public double getMonthlyCost() {
		return monthlyCost;
	}
	public void setMonthlyCost(double monthlyCost) {
		this.monthlyCost = monthlyCost;
	}
	public double getSecurityDeposit() {
		return securityDeposit;
	}
	public void setSecurityDeposit(double securityDeposit) {
		this.securityDeposit = securityDeposit;
	}
	public int getRooms() {
		return rooms;
	}
	public void setRooms(int rooms) {
		this.rooms = rooms;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getDetailedLocation() {
		return detailedLocation;
	}
	public void setDetailedLocation(String detailedLocation) {
		this.detailedLocation = detailedLocation;
	}
	public int getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}
	
	
	public Home() {
	
	}
	public Home(int id, String type, String location, String occupancy, String status, String furnished,
			double monthlyCost, double securityDeposit, int rooms, String details, String detailedLocation,
			int ownerId) {
		super();
		this.id = id;
		this.type = type;
		this.location = location;
		this.occupancy = occupancy;
		this.status = status;
		this.furnished = furnished;
		this.monthlyCost = monthlyCost;
		this.securityDeposit = securityDeposit;
		this.rooms = rooms;
		this.details = details;
		this.detailedLocation = detailedLocation;
		this.ownerId = ownerId;
	}
	public Home(String type, String location, String occupancy, String status, String furnished, double monthlyCost,
			double securityDeposit, int rooms, String details, String detailedLocation, int ownerId) {
		super();
		this.type = type;
		this.location = location;
		this.occupancy = occupancy;
		this.status = status;
		this.furnished = furnished;
		this.monthlyCost = monthlyCost;
		this.securityDeposit = securityDeposit;
		this.rooms = rooms;
		this.details = details;
		this.detailedLocation = detailedLocation;
		this.ownerId = ownerId;
	}
	@Override
	public String toString() {
		return "Home [id=" + id + ", type=" + type + ", location=" + location + ", occupancy=" + occupancy + ", status="
				+ status + ", furnished=" + furnished + ", monthlyCost=" + monthlyCost + ", securityDeposit="
				+ securityDeposit + ", rooms=" + rooms + ", details=" + details + ", detailedLocation="
				+ detailedLocation + ", ownerId=" + ownerId + "]";
	}	

	

	
}

