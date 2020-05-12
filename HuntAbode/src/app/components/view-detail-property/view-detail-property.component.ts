import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';

@Component({
  selector: 'app-view-detail-property',
  templateUrl: './view-detail-property.component.html',
  styleUrls: ['./view-detail-property.component.css']
})
export class ViewDetailPropertyComponent implements OnInit {
  
  homes:Array<Home>=[]

  constructor(private rentalService:RentalService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.rentalService.fetchAllProperties()
    .subscribe((res:Array<Home>)=>{
      console.log(res);
      this.homes=res;
    })
    
  }
}
