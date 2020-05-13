import { Component, OnInit } from '@angular/core';
import {RentalService} from 'src/app/services/rental.service';



import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.component.html',
  styleUrls: ['./tenant-home.component.css']
})
export class TenantHomeComponent implements OnInit {

  showMessage: boolean;
  gemail:string;
  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router) { }

  focus;
  focus1;
  focus2;
  tenantForm : FormGroup;
  
  ngOnInit(): void {

    this.tenantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
    console.log("Form value=",this.tenantForm.value);
    
  }

  
onSubmit(){
  this.gemail=this.tenantForm.value.email;
  console.log("Email=",this.gemail);
  console.log("new form value", this.tenantForm.value);
  this.rentalService.addTenant(this.tenantForm.value,this.gemail)
  .subscribe(res=>{
    console.log(res);
   // this.router.navigate("",{gemail})
  }); 

  setTimeout(() => { this.getdata();  }, 1000);
}

getdata()
{
  this.router.navigate(["view-property",{email:this.gemail}]);
}

}



