import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-detailed-interested-property',
  templateUrl: './detailed-interested-property.component.html',
  styleUrls: ['./detailed-interested-property.component.css']
})
export class DetailedInterestedPropertyComponent implements OnInit {

  id: any;
  approve: string;
  home: Home;
  imgs: Array<string> = ["https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

  constructor(private rentalService: RentalService, private route: ActivatedRoute) { }

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
