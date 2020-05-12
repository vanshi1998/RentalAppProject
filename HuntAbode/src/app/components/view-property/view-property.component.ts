import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  
  homes:Array<Home>=[]
  email:string;

  constructor(private rentalService:RentalService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.rentalService.fetchAllProperties()
  .subscribe((res:Array<Home>)=>{
    console.log(res);
    this.homes=res;
  })
  }
  
  showDetails(){
    console.log("detail of home");
    this.router.navigate(["showDetail"]);
  }
  
  interestHomes(){
    console.log("go to my interested homes ");
    this.router.navigate(["booked-property",{email:this.email}]);  
  }
  
}
