import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  focus;
  focus1;
   homeForm: FormGroup;
   email:string="ikshita@gmail.com"
   
  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.homeForm = this.fb.group({
                  name: ['', Validators.required],
                  location: ['', Validators.required],
                  type: ['', Validators.required],
                  rooms: ['', Validators.required],
                  occupancy: ['', Validators.required],
                  status: ['', Validators.required],
                  furnished: ['', Validators.required],
                  monthlyCost: ['', Validators.required],
                  securityDeposit: ['', Validators.required],
                  urlOfImage: ['', Validators.required],
                  detailedLocation: ['', Validators.required],
                  details: ['', Validators.required],
                  ownerId: ['30']
                
            });

  }
 onSubmit()
 {
   console.log("form value=",this.homeForm.value);
     this.rentalService.addPropertyCertain(this.homeForm.value,this.email)
  .subscribe((res:any)=> {
    console.log("result",res); 
   })

   setTimeout(() => { this.dashboard();  }, 1000);

   
 }

 dashboard()
 {
  this.router.navigate(["user-profile"]);
 }
}
