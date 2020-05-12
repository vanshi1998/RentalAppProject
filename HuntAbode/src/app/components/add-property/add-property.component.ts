import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  focus;
  focus1;
   homeForm: FormGroup;
   
  constructor(private fb: FormBuilder,private rentalService:RentalService) { }

  ngOnInit(): void {
     this.homeForm = this.fb.group({
                  location: ['', Validators.required],
                  type: ['', Validators.required],
                  rooms: ['', Validators.required],
                  occupancy: ['', Validators.required],
                  status: ['', Validators.required],
                  furnished: ['', Validators.required],
                  monthlyRent: ['', Validators.required],
                  securityDeposit: ['', Validators.required],
                  detailedLocation: ['', Validators.required],
                  details: ['', Validators.required],
                
            });

  }
 onSubmit()
 {
   console.log("form value=",this.homeForm.value);
    /*this.rentalService.fetchInterestedHomes(this.email)
  .subscribe((res:Array<InterestedHome>)=> {
    console.log("result",res);
    this.interestedHomes = res;
    console.log("Interested Homes are",this.interestedHomes);
   })*/
 }

}
