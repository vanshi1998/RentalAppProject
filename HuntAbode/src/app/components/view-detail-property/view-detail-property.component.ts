import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-view-detail-property',
  templateUrl: './view-detail-property.component.html',
  styleUrls: ['./view-detail-property.component.css']
})
export class ViewDetailPropertyComponent implements OnInit {

  home: Home;
  id: any;
  closeResult: string;
  dateForm: FormGroup;
  email:string;
  meetingDate:string;
  message:boolean=false;

  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  constructor(private fb: FormBuilder,private modalService: NgbModal, calendar: NgbCalendar, private rentalService: RentalService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('id'));
      this.id = params.get('id');
      this.email=params.get('email');
      console.log("Id is", this.id);
      console.log("Email=",this.email);


    })

     this.dateForm = this.fb.group({
      myDate: ['', Validators.required]
    }); 


    this.rentalService.fetchPropertyById(this.id).subscribe((res: Home) => {

      this.home = res;
      console.log("Home is=", this.home);
    })

  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  onSubmit()
  {
    console.log("date=",this.dateForm.value.myDate);
    this.meetingDate=this.dateForm.value.myDate;
    console.log("meeting date=",this.meetingDate);
    this.rentalService.addInterestedHome(this.home,this.email,this.id,this.meetingDate).subscribe((res: any) => {
      console.log("result=", res);
      console.log("status code=",res.status);
      if(res.status==202)
      this.message=true;
    })

  } 

}
