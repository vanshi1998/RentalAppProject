package com.ibm.RentalApplication.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.RentalApplication.Entities.Home;
import com.ibm.RentalApplication.Entities.HomeOwner;
import com.ibm.RentalApplication.Repositories.HomeOwnerRepository;
import com.ibm.RentalApplication.Repositories.HomeRepository;

@Service
public class HomeService {

	@Autowired
	HomeRepository homeRepository;
	
	@Autowired
	HomeOwnerRepository homeOwnerRepository;
	
	@Transactional
	public void addHome(Home home,String email) {
		HomeOwner homeOwner=homeOwnerRepository.findByEmail(email);
		System.out.println("Hi i am a owner!!!!!!!!!"+homeOwner);
		List<Home> homes=homeOwner.getHomes();
		System.out.println("List of homes are="+homes);
		homes.add(home);
		System.out.println("Homes after adding="+homes);
		homeOwner.setHomes(homes);
		System.out.println("Home set to"+homeOwner.getHomes());
		System.out.println("Owner is"+homeOwner);
		System.out.println("Through find method"+findAllHomeOwner());
		
		
	}
	

	public List<Home> findAllHomes() {
		List<Home> homes =  homeRepository.findAll();
		System.out.println(homes);
		return homes;
	}
	
	public List<Home> findHomeByType(String type) {
		return homeRepository.findByType(type);
	}

	public List<Home> findHomeByLocation(String location) {
		return homeRepository.findByLocation(location);
	}

	public HomeOwner addHomeOwner(HomeOwner homeOwner,String email) {
		HomeOwner homeOwner1=homeOwnerRepository.findByEmail(email);
		if(homeOwner1==null) {
			return homeOwnerRepository.save(homeOwner);
		}
		else
		{
			return null;
		}
	}
	
	public List<HomeOwner> findAllHomeOwner() {
		List<HomeOwner> homeOwner =  homeOwnerRepository.findAll();
		System.out.println(homeOwner);
		return homeOwner;
	}
	
    public void deleteHomeById(int id) {
		
		homeRepository.deleteById(id);
		
	}
    
    public List<Home> viewHomeOfOwner(String email)
    {
    	HomeOwner homeOwner2=homeOwnerRepository.findByEmail(email);
    	return homeOwner2.getHomes();
    }
    
    @Transactional
    public void updateStatusOfHome(int homeId,String status)
    {
    	Home home=homeRepository.findById(homeId);
    	home.setStatus(status);
    	
    }

    @Transactional
	public void updateCostOfHome(int id, Double cost) {
		Home home=homeRepository.findById(id);
    	home.setMonthlyCost(cost);
		
	}

    @Transactional
	public void updateOccupancyOfHome(int id, String occupancy) {
		Home home=homeRepository.findById(id);
    	home.setOccupancy(occupancy);
		
	}

    @Transactional
	public void updateSecurityOfHome(int id, Double security) {
    	Home home=homeRepository.findById(id);
    	home.setSecurityDeposit(security);
		
	}
	
}
