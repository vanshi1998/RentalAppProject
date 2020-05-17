import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  homes: Array<Home> = []

  email: string;
  id: number;

  constructor(private rentalService: RentalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('email'));
      this.email = params.get('email');
      console.log("Email=", this.email);

    })
    this.rentalService.fetchAllProperties()
      .subscribe((res: Array<Home>) => {
        console.log(res);
        this.homes = res;
      })

  }

  showDetails(homeId: number) {
    console.log("detail of home");
    this.id = homeId;
    this.router.navigate(["showDetail", { id: this.id, email: this.email }]);
  }

  interestHomes() {
    console.log("go to my interested homes ");
    this.router.navigate(["booked-property", { email: this.email }]);
  }

  jakhan() {
    this.router.navigate(["location-filtered", { email: this.email, location: "Jakhan" }]);
  }

  rajpur() {
    this.router.navigate(["location-filtered", { email: this.email, location: "Rajpur Road" }]);
  }

  makkawala() {
    this.router.navigate(["location-filtered", { email: this.email, location: "Makaawala" }]);
  }

  johri() {
    this.router.navigate(["location-filtered", { email: this.email, location: "Johri Gaon" }]);
  }

  malsi() {
    this.router.navigate(["location-filtered", { email: this.email, location: "Malsi" }]);
  }

  semiFurnished() {
    this.router.navigate(["furnishing-filtered", { email: this.email, furnished: "Semi-Furnished" }]);
  }

  furnished() {
    this.router.navigate(["furnishing-filtered", { email: this.email, furnished: "Fully-Furnished" }]);
  }
  unfurnished() {
    this.router.navigate(["furnishing-filtered", { email: this.email, furnished: "Unfurnished" }]);

  }
  single() {
    this.router.navigate(["occupancy-filtered", { email: this.email, occupancy: "Single" }]);

  }
  sharing() {
    this.router.navigate(["occupancy-filtered", { email: this.email, occupancy: "Sharing" }]);
  }
  flat() {
    this.router.navigate(["type-filtered", { email: this.email, type: "Flat" }]);

  }
  pg() {
    this.router.navigate(["type-filtered", { email: this.email, type: "PG" }]);
  }
  bangalow() {
    this.router.navigate(["type-filtered", { email: this.email, type: "Bungalow" }]);
  }






}
