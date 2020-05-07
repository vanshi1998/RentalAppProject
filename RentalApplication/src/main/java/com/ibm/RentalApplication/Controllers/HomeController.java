package com.ibm.RentalApplication.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.RentalApplication.Entities.Home;
import com.ibm.RentalApplication.Entities.HomeOwner;
import com.ibm.RentalApplication.Services.HomeService;



@RestController
@CrossOrigin
public class HomeController {

	@Autowired
	HomeService homeService;
	
	@PutMapping("/home/email/{email}")
	public ResponseEntity<Void> addHome(@RequestBody Home home,@PathVariable("email") String email) {
		homeService.addHome(home,email);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
		return re;

	}

	@GetMapping("/home")
	public List<Home> findAllHomes(){
		return homeService.findAllHomes();
	}
	
	@GetMapping("/home/type/{type}")
	public List<Home> findHomeByType(@PathVariable("type") String type){
		return homeService.findHomeByType(type);
	}
	
	@GetMapping("/home/location/{location}")
	public List<Home> findHomeByLocation(@PathVariable("location") String location){
		return homeService.findHomeByLocation(location);
	}
	
	@PostMapping("/owner/email/{email}")
	public ResponseEntity<Void> addOwner(@RequestBody HomeOwner homeOwner,@PathVariable("email") String email){
		
		homeService.addHomeOwner(homeOwner,email);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
		return re;
	} 
	
	@GetMapping("/owner")
	public List<HomeOwner> findAllHomeOwners(){
		System.out.println("All HomeOwners"+homeService.findAllHomeOwner());
		return homeService.findAllHomeOwner();
		
	}
	
	@RequestMapping(path="/home/delete/{id}" , method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteHome(@PathVariable("id") int id){
		ResponseEntity<Void> re= null;
		try{
			homeService.deleteHomeById(id);
			re = new ResponseEntity<>(HttpStatus.OK);
			
		}
		catch(EmptyResultDataAccessException e){
			re = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return re;
		
	}
	
	@GetMapping("/home/email/{email}")
	public List<Home> viewAllHomeOfOwner(@PathVariable("email") String email){
		
		return homeService.viewHomeOfOwner(email);
		
	}
	
	@PutMapping("/home/updateByStatus/{id}/{status}")
	public ResponseEntity<Void> updateHomeByStatus(@PathVariable("id") int id,@PathVariable("status") String status) {
		homeService.updateStatusOfHome(id,status);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
		return re;

	}
	
	@PutMapping("/home/updateByCost/{id}/{cost}")
	public ResponseEntity<Void> updateHomeByCost(@PathVariable("id") int id,@PathVariable("cost") Double cost) {
		homeService.updateCostOfHome(id,cost);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
		return re;

	}
	
	@PutMapping("/home/updateByOccupancy/{id}/{occupancy}")
	public ResponseEntity<Void> updateHomeByOccupancy(@PathVariable("id") int id,@PathVariable("occupancy") String occupancy) {
		homeService.updateOccupancyOfHome(id,occupancy);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
		return re;

	}
	
	@PutMapping("/home/updateBySecurity/{id}/{security}")
	public ResponseEntity<Void> updateHomeBySecurity(@PathVariable("id") int id,@PathVariable("security") Double security) {
		homeService.updateSecurityOfHome(id,security);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
		return re;

	}
	
	
	
}
