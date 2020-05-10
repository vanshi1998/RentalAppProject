package com.ibm.rental.RentalApplication.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.rental.RentalApplication.Entities.InterestedHome;

public interface InterestedHomeRepository  extends JpaRepository<InterestedHome,Integer>{

public 	List<InterestedHome> findByHomeId(int homeid);

 

}
