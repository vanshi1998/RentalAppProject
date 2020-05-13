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
  
  home:Home;
    id:any;

  constructor(private rentalService:RentalService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('id'));
      this.id=params.get('id');
      console.log("Id is",this.id);
    })



    this.rentalService.fetchPropertyById(this.id).subscribe((res: Home) => {
      
      this.home = res;
      console.log("Home is=",this.home);
      })
    
  }
}
