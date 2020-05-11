package com.ibm.RentalApplication.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.RentalApplication.Entities.Home;

public interface HomeRepository extends JpaRepository<Home, Integer>{
	
	public List<Home> findByType(String type);
	public List<Home> findByLocation(String location);
	public Home findById(int id);

	//public Home findByType(String type);
	//public Home deleteById(int id);
	//public Home findByLocation(String location);
	//public Home findById(int id);

}
