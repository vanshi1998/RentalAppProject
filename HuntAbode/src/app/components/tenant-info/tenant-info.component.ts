import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeTenant } from 'src/app/models/home-tenant';


@Component({
  selector: 'app-tenant-info',
  templateUrl: './tenant-info.component.html',
  styleUrls: ['./tenant-info.component.css']
})
export class TenantInfoComponent implements OnInit {

  tenants:Array<HomeTenant>=[]
  tenantname:String
  homeId:any;
  constructor(private rentalService: RentalService,private router: Router, private route: ActivatedRoute) {      }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('id'));
      this.homeId=params.get('id');
      console.log("Home id=",this.homeId);
      
    })

    this.rentalService.fetchAllTenants()
  .subscribe((res:Array<HomeTenant>)=> {
    console.log(res);       
    this.tenants = res;
    
  })   

}
 
onApprove(tenants:any){
  console.log("Your meeting has been fixed");
}  
}
          