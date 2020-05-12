import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";

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
  constructor(private fb: FormBuilder,private rentalService:RentalService) { }

  gemail:string;
  ngOnInit(): void {
    this.ownerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      
    
});
  }
  
  onSubmit(){
    //console.log("form value=", this.ownerForm.value);
    this.gemail=this.ownerForm.value.email;
    this.rentalService.addHouseOwner(this.ownerForm.value,this.ownerForm.value.email)
            .subscribe(res=>{
              console.log(res)
               // this.router.navigate(" ",{gmail})
            });
          
          }

}
