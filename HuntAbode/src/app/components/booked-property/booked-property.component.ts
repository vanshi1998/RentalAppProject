import { Component, OnInit } from '@angular/core';
import { RentalService } from "src/app/services/rental.service";
import { InterestedHome } from "src/app/models/interested-home";
import { Home } from "src/app/models/home";

@Component({
  selector: 'app-booked-property',
  templateUrl: './booked-property.component.html',
  styleUrls: ['./booked-property.component.css']
})
export class BookedPropertyComponent implements OnInit {

  constructor(private rentalService:RentalService) { }

  email :string;
  interestedHomes:Array<InterestedHome>;
homeIds:Array<number>=[];
intHomes:Array<Home>=[];

  ngOnInit(): void {

   this.email="abcd@gmail.com";
    console.log("Email=",this.email);
    this.rentalService.fetchInterestedHomes(this.email)
  .subscribe((res:Array<InterestedHome>)=> {
    console.log("result",res);
    this.interestedHomes = res;
    console.log("Interested Homes are",this.interestedHomes);
   })


 setTimeout(() => { this.getdata();  }, 3000);


}

getdata()
{
   this.interestedHomes.forEach(interestHome => {
      this.homeIds.push(interestHome.homeId);
    });

   console.log("All home ids=",this.homeIds);
   
    this.homeIds.forEach(id => {
      this.rentalService.fetchPropertyById(id)
  .subscribe((res:Home)=> {
    console.log("result",res);
    this.intHomes.push(res);
    console.log("Home is",this.intHomes);
    });
   })
}
}

