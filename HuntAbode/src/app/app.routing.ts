import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ViewPropertyOwnerComponent } from './components/view-property-owner/view-property-owner.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';
import { EditPropertyImagesComponent } from './components/edit-property-images/edit-property-images.component';

import { BookedPropertyComponent } from './components/booked-property/booked-property.component';
import { DetailedInterestedPropertyComponent } from './components/detailed-interested-property/detailed-interested-property.component';
import { TenantHomeComponent } from './components/tenant-home/tenant-home.component';
import { OwnerHomeComponent } from './components/owner-home/owner-home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view-property', component: ViewPropertyComponent },
  { path: 'view-property-owner', component: ViewPropertyOwnerComponent },
  { path: 'edit-property', component: EditPropertyComponent},
  { path: 'edit-property-images', component: EditPropertyImagesComponent},
  { path: 'add-property',             component: AddPropertyComponent },
  { path: 'booked-property',             component: BookedPropertyComponent },
  { path: 'tenant-home',             component: TenantHomeComponent },
  { path: 'owner-home',             component: OwnerHomeComponent },
  { path: 'detailed-interested-property',             component: DetailedInterestedPropertyComponent },
  { path: '', redirectTo: 'booked-property', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
