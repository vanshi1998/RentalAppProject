import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-furnishing',
  templateUrl: './filter-furnishing.component.html',
  styleUrls: ['./filter-furnishing.component.css']
})
export class FilterFurnishingComponent implements OnInit {
  homes: Array<Home> = []
  email: string;
  length: boolean = false;
  furnished: string;
  id: number;
  constructor(private rentalService: RentalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('furnished'), params.get('email'));
      this.email = params.get('email');
      this.furnished = params.get('furnished');
      console.log("furnished=", this.furnished);

    })
    this.rentalService.fetchHomeByFurnished(this.furnished)
      .subscribe((res: Array<Home>) => {
        console.log(res);
        this.homes = res;
        if (this.homes.length == 0) {
          this.length = true;
          console.log(this.length);
        }

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
    this.router.navigate(["view-property", { email: this.email }]);
  }


}
