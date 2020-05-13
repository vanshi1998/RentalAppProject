import { Component, OnInit } from '@angular/core';
import {RentalService} from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-view-property-owner',
  templateUrl: './view-property-owner.component.html',
  styleUrls: ['./view-property-owner.component.css']
})
export class ViewPropertyOwnerComponent implements OnInit {

  homes:Array<any>=[]
  email : string;



  constructor(private rentalService: RentalService ,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('check1!');

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('email'));
      this.email=params.get('email');
  
    }) 

    this.rentalService.fetchPropertryCertain(this.email)
    .subscribe((res: Array<any>)=>{
      console.log(res);
      this.homes=res;
    })
  }

  deleteProperty(){
    /* to be implemented  */

  }

}


