package com.ibm.RentalApplication.Entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class InterestedHome {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	int homeId;
	int tenantId;
	String approve="Pending";
	
	public InterestedHome()
	{
		
	}
	
	

	public InterestedHome(int id, int homeId, int tenantId, String approve) {
		super();
		this.id = id;
		this.homeId = homeId;
		this.tenantId = tenantId;
		this.approve = approve;
	}



	public InterestedHome(int homeId, int tenantId, String approve) {
		super();
		this.homeId = homeId;
		this.tenantId = tenantId;
		this.approve = approve;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	
	
	public String getApprove() {
		return approve;
	}



	public void setApprove(String approve) {
		this.approve = approve;
	}



	public int getHomeId() {
		return homeId;
	}



	public void setHomeId(int homeId) {
		this.homeId = homeId;
	}



	public int getTenantId() {
		return tenantId;
	}



	public void setTenantId(int tenantId) {
		this.tenantId = tenantId;
	}



	@Override
	public String toString() {
		return "InterestedHome [id=" + id + ", homeId=" + homeId + ", tenantId=" + tenantId + ", approve=" + approve
				+ "]";
	}


	
	
	
}
