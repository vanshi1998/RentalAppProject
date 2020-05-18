import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detailed-interested-property',
  templateUrl: './detailed-interested-property.component.html',
  styleUrls: ['./detailed-interested-property.component.css']
})
export class DetailedInterestedPropertyComponent implements OnInit {

  closeResult: string;
  id: any;
  approve: string;
  home: Home;
  imgs: Array<string> = ["https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

  constructor(private rentalService: RentalService, private route: ActivatedRoute, private modalService: NgbModal) { }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
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
      return 'with: $reason';
    }
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('id'));
      this.approve = params.get("approve");
      this.id = params.get('id');
      console.log("Id is", this.id);
      console.log("Approve is=", this.approve);
    })

    this.rentalService.fetchPropertyById(this.id).subscribe((res: Home) => {

      this.home = res;
      console.log("Home are=", this.home);
    })

  }

}
