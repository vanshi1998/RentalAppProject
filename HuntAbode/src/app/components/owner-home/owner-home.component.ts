import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent implements OnInit {

  
  focus;
  focus1;
  focus2;
  ownerForm:FormGroup;
  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router) { }

  gemail:string;
  ngOnInit(): void {
    this.ownerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      
    
});

  }
  
  onSubmit(){
    console.log("form value=", this.ownerForm.value);
    this.gemail=this.ownerForm.value.email;
    console.log("Email=",this.gemail);
     this.rentalService.addHouseOwner(this.ownerForm.value,this.gemail)
            .subscribe(res=>{
              console.log(res)
               // this.router.navigate(" ",{gmail})
            }); 
          
            console.log("Email again=",this.gemail);
            setTimeout(() => { this.getdata();  }, 1000);
          }

          getdata()
          {
            this.router.navigate(["user-profile",{email:this.gemail}]);
          }

}
