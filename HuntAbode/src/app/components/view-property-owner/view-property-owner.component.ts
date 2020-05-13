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
  email : string='ikshita@gmail.com';
  showMessage: boolean=false;



  constructor(private rentalService: RentalService ,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('check1!');

    this.rentalService.fetchPropertryCertain(this.email)
    .subscribe((res: Array<any>)=>{
      console.log(res);
      this.homes=res;
    })
  }

  deleteProperty(id: number){
    /* to be implemented  */
    console.log('Delete attempted with id: '+id);
    this.rentalService.deleteHome(id)
    .subscribe((res:any)=>{
      console.log(res);
      if(res.status == 200){
        this.showMessage = true;
        this.homes = this.homes.filter((home)=> home.id!=id)
      }
    })

  }

}

/*

deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe((res:any)=> {
      console.log(res);
     if(res.status == 200){
       this.showMessage = true;
       this.employees = this.employees.filter((employee)=> employee.id!=id)
     }
    })
  }


*/


