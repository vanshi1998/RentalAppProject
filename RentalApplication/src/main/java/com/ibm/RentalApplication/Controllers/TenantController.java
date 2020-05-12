package com.ibm.RentalApplication.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.RentalApplication.Entities.Home;
import com.ibm.RentalApplication.Entities.HomeTenant;
import com.ibm.RentalApplication.Entities.InterestedHome;
import com.ibm.RentalApplication.Services.HomeService;

@RestController
@CrossOrigin
public class TenantController {

	@Autowired
	HomeService homeService;
	
	@GetMapping("/home")
	public List<Home> findAllHomes(){
		return homeService.findAllHomes();
	}
	
	@GetMapping("/home/id/{id}")
	public Home findHomeById(@PathVariable("id") int id){
		return homeService.findHomeById(id);
	}
	
	
	@GetMapping("/home/type/{type}")
	public List<Home> findHomeByType(@PathVariable("type") String type){
		return homeService.findHomeByType(type);
	}
	
	@GetMapping("/home/location/{location}")
	public List<Home> findHomeByLocation(@PathVariable("location") String location){
		return homeService.findHomeByLocation(location);
	}
	
	@PostMapping("/tenant/email/{email}")
	public ResponseEntity<Void> addTenant(@RequestBody HomeTenant homeTenant,@PathVariable("email") String email){
		
		homeService.addHomeTenant(homeTenant,email);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
		return re;
	} 
	
	//put mapping to add the interested home of particular tenant
	
	@PutMapping("/tenant/interestedHome/{email}/{homeid}")
	public ResponseEntity<Void> addInterestHome(@PathVariable("email") String email,@PathVariable("homeid") int homeid) {
		homeService.addHomeOfInterest(email,homeid);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
		return re;

	}
	
	@GetMapping("/tenant")
	public List<HomeTenant> findAllHmeTenants(){
		return homeService.findAllHomeTenants();
	}
	
	@GetMapping("/tenant/email/{email}")
	public HomeTenant findTenantByEmail(@PathVariable("email") String email){
		return homeService.findTenantByEmail(email);
	}
	
	
	@GetMapping("/tenant/viewInterestedHomes/{email}")
	public List<InterestedHome> viewInterestedHomes(@PathVariable("email") String email)
	{
		return homeService.findInterestedHomeOfTenant(email);
		
	}
	
	@GetMapping("/interestedHomes")
	public List<InterestedHome> findAllHomesOfInterest(){
		return homeService.findAllInterestedHomes();
	}
	
	@GetMapping("/home/interestedTenants/{homeid}")
	public List<HomeTenant> displayInterestedTenantsOfHome(@PathVariable("homeid") int homeid)
	{
		return homeService.interestedTenantsOfHome(homeid);
	}
	
}
