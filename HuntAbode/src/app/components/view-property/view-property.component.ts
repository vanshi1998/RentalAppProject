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
  id:number;

  constructor(private rentalService:RentalService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('email'));
      this.email=params.get('email');
      console.log("Email=",this.email);
      
    })
  this.rentalService.fetchAllProperties()
  .subscribe((res:Array<Home>)=>{
    console.log(res);
    this.homes=res;
  })
  }
  
  showDetails(homeId:number){
    console.log("detail of home");
    this.id=homeId;
    this.router.navigate(["showDetail",{id:this.id}]);
  }
  
  interestHomes(){
    console.log("go to my interested homes ");
    this.router.navigate(["booked-property",{email:this.email}]);  
  }
  
}
