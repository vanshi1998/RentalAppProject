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
import { BookedPropertyComponent } from './components/booked-property/booked-property.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view-property', component: ViewPropertyComponent },
  { path: 'view-property-owner', component: ViewPropertyOwnerComponent },
  { path: 'add-property',             component: AddPropertyComponent },
  { path: 'booked-property',             component: BookedPropertyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
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
