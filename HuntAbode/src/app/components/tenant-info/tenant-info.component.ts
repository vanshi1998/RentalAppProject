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
  constructor(private rentalService: RentalService,private router: Router, private route: ActivatedRoute) {      }

  ngOnInit(): void {
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
          