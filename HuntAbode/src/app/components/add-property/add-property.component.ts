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
   email:string;
   ownerId:any;
   resultStatus:number;
   message:boolean=false;

  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('email'));
      this.email=params.get('email');
      this.ownerId=params.get('ownerId');
      console.log("Email=",this.email);
      console.log("Owner id=",this.ownerId);
    })


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
                  details: [''],
                  ownerId: [this.ownerId]
                
            });

  }
 onSubmit()
 {
   console.log("form value=",this.homeForm.value);
   console.log("Owner Id=",this.homeForm.value.ownerId);
     this.rentalService.addPropertyCertain(this.homeForm.value,this.email)
  .subscribe((res:any)=> {
    console.log("result",res); 
    this.resultStatus=res.status;
    if(this.resultStatus!=202){
      this.message=true;
    }
   })

   setTimeout(() => { this.dashboard();  }, 1000);

   
 }
 get f(){
  return this.homeForm.controls;
}

 dashboard()
 {
   if(this.message==false)
   {
  this.router.navigate(["user-profile",{email:this.email}]);
   }
 }
}
