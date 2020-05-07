import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GridComponent } from './components/grid/grid.component';
import { InfoComponent } from './components/info/info.component';
import { TenantHomeComponent } from './components/tenant-home/tenant-home.component';
import { OwnerHomeComponent } from './components/owner-home/owner-home.component';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard.component';
import { AllPropertiesComponent } from './components/all-properties/all-properties.component';
import { BookedPropertyComponent } from './components/booked-property/booked-property.component';


const appRoutes: Routes = [
 
  { path: 'viewProperty', component: ViewPropertyComponent },
  { path: 'addProperty' , component: AddPropertyComponent},
  { path: 'ownerHome' , component: OwnerHomeComponent},
  { path: 'tenantHome' , component: TenantHomeComponent},
  { path: 'allProperties' , component: AllPropertiesComponent},
  { path: 'bookedProperties' , component: BookedPropertyComponent},
  { path: 'ownerDashboard' , component: OwnerDashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
    ViewPropertyComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    GridComponent,
    InfoComponent,
    TenantHomeComponent,
    OwnerHomeComponent,
    OwnerDashboardComponent,
    AllPropertiesComponent,
    BookedPropertyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
