import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeTenant } from 'src/app/models/home-tenant';
import { InterestedHome } from 'src/app/models/interested-home';


@Component({
  selector: 'app-tenant-info',
  templateUrl: './tenant-info.component.html',
  styleUrls: ['./tenant-info.component.css']
})
export class TenantInfoComponent implements OnInit {

  tenants:Array<HomeTenant>=[]
  tenantname:String
  homeId:any;
  email:string;
  meetingDates:Array<string>;
  
  constructor(private rentalService: RentalService,private router: Router, private route: ActivatedRoute) {      }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('id'));
      this.homeId=params.get('id');
      this.email=params.get('email');
      console.log("Home id=",this.homeId);
      console.log("Email=",this.email);
      
    })

    this.rentalService.fetchInterestedTenants(this.homeId)
  .subscribe((res:Array<HomeTenant>)=> {
    console.log(res);       
    this.tenants = res;
    
  })   

  this.tenants.forEach(tenant => {

    tenant.homesOfInterest.forEach(homeOfInterest => {
      if(homeOfInterest.homeId==this.homeId)
      {
        this.meetingDates.push(homeOfInterest.meetingDate);
      }
    });
  });
setTimeout(() => { this.getdata();  }, 2000);

}

getdata()
{
  console.log("tenants are=",this.tenants);
  console.log("dates are=",this.meetingDates);
}
 
onApprove(tenants:any){
  console.log("Your meeting has been fixed");
}  
}
          