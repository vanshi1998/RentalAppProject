import { Component, OnInit } from '@angular/core';
import { RentalService } from "src/app/services/rental.service";
import { InterestedHome } from "src/app/models/interested-home";
import { Home } from "src/app/models/home";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booked-property',
  templateUrl: './booked-property.component.html',
  styleUrls: ['./booked-property.component.css']
})
export class BookedPropertyComponent implements OnInit {

  constructor(private rentalService:RentalService,private router: Router, private route: ActivatedRoute)  { }

  email :string;
  interestedHomes:Array<InterestedHome>;
homeIds:Array<number>=[];
approves:Array<String>=[];
requiredApprove:String;
intHomes:Array<Home>=[];
id:number;
  ngOnInit(): void {

   //this.email="abcd@gmail.com";

   this.route.paramMap.subscribe(params => {
      
    console.log('***', params.get('email'));
    this.email=params.get('email');
    console.log("Email=",this.email);
    
  })

    console.log("Email=",this.email);
    this.rentalService.fetchInterestedHomes(this.email)
  .subscribe((res:Array<InterestedHome>)=> {
    console.log("result",res);
    this.interestedHomes = res;
    console.log("Interested Homes are",this.interestedHomes);
   })


 setTimeout(() => { this.getdata();  }, 1000);


}

getdata()
{
   this.interestedHomes.forEach(interestHome => {
      this.homeIds.push(interestHome.homeId);
      this.approves.push(interestHome.approve);
    });

   console.log("All home ids=",this.homeIds);
   
    /* this.homeIds.forEach(id => {
      this.rentalService.fetchPropertyById(id)
  .subscribe((res:Home)=> {
    console.log("result",res);
    this.intHomes.push(res);
    console.log("Home is",this.intHomes);
    });
   }) */
   this.rentalService.fetchHomesOfInterestedHomes(this.email)
   .subscribe((res:Array<Home>)=> {
     console.log("result",res);
    this.intHomes=res;
     console.log("Homes are",this.intHomes);
    })

}

loadDetails(i:number)
{
  this.requiredApprove=this.approves[i];
  this.id=this.homeIds[i];
  this.router.navigate(["detailed-interested-property",{id:this.id,approve:this.requiredApprove}]);
}

}

