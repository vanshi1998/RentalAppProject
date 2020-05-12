import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-detailed-interested-property',
  templateUrl: './detailed-interested-property.component.html',
  styleUrls: ['./detailed-interested-property.component.css']
})
export class DetailedInterestedPropertyComponent implements OnInit {

    id:any;
    approve:string;
    home:Home;

  constructor(private rentalService:RentalService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('id'));
      this.approve = params.get("approve");
      this.id=params.get('id');
      console.log("Id is",this.id);
      console.log("Approve is=",this.approve);
    })

    this.rentalService.fetchPropertyById(this.id).subscribe((res: Home) => {
      
      this.home = res;
      console.log("Home are=",this.home);
      })

  }

}
