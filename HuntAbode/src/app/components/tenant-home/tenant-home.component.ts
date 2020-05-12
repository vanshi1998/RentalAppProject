import { Component, OnInit } from '@angular/core';
import {RentalService} from 'src/app/services/rental.service';



import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.component.html',
  styleUrls: ['./tenant-home.component.css']
})
export class TenantHomeComponent implements OnInit {

  showMessage: boolean;
  gemail:string;
  constructor(private rentalService:RentalService) { }

  focus;
  focus1;
  focus2;
  tenantForm : FormGroup;
  
  ngOnInit(): void {
  }

  
onSubmit(){
  this.gemail=this.tenantForm.value.email;
  //console.log("form value", this.tenantForm.value);
  this.rentalService.addTenant(this.tenantForm.value,this.tenantForm.value.email)
  .subscribe(res=>{
    console.log(res)
   // this.router.navigate("",{gemail})
  });
}

}



