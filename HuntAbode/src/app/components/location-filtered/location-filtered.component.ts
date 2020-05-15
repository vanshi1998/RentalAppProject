import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-filtered',
  templateUrl: './location-filtered.component.html',
  styleUrls: ['./location-filtered.component.css']
})
export class LocationFilteredComponent implements OnInit {

  homes: Array<Home> = []
  email: string;
  location: string;
  id: number;

  constructor(private rentalService: RentalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('location'), params.get('email'));
      this.email = params.get('email');
      this.location = params.get('location');
      console.log("Location=", this.location);

    })
    this.rentalService.fetchHomeByLocation(this.location)
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

  back() {
    this.router.navigate(["view-property",{email:this.email}]);
  }

}
