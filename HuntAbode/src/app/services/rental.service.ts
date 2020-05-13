import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../models/home';
/*import { BehaviorSubject } from 'rxjs';*/

const baseUrl = 'http://localhost:8001/';

@Injectable({
  providedIn: 'root'
})

export class RentalService {

  homes:Array<Home>=[]
  home:Home;

  constructor(private http: HttpClient) { }

  fetchAllProperties(){
      return this.http.get(baseUrl+'home');
  }

  fetchPropertyById(id:number)
  {
     return this.http.get(baseUrl+'home/id/'+id);
  }

  fetchAllOwners(){
    return this.http.get(baseUrl+'owner');
  }

  fetchPropertryCertain(email:string){
    return this.http.get(baseUrl+'home/email/'+email)
  }

  deleteHome(id: number){
    return this.http.delete(baseUrl + 'home/delete/' +id, {observe : 'response'})
  }

  /* For now "any" type has been used, can be updated after creating specific models.  */

  addHouseOwner(houseOwner: any,email:string){
    console.log('Check : ', houseOwner)
    return this.http.post(baseUrl+'owner/email/'+email, 
      houseOwner,{observe : 'response'})

  }

  fetchOwnerByEmail(email:string)
  {
    return this.http.get(baseUrl + 'owner/email/' + email)
  }
  
  addPropertyCertain(property: any, email:string){
    console.log('Check : ', property)
    return this.http.put(baseUrl+'home/email/'+email,
      property,{observe: 'response'})
  }

  updateStatusHome(homeid:number, status:string){
      return this.http.put(baseUrl + 'home/updateByStatus/' + homeid+'/'+ status,
      status,{observe : 'response'})
  }

  updateOccupancyHome(homeId:number, occupancy: number){
      return this.http.put(baseUrl+'home/updateByOccupancy/' + homeId+'/'+occupancy,
      occupancy,{observe: 'response'})
  }

  updateSecurityCostHome(homeId:number, securityCost: number){
    return this.http.put(baseUrl+'home/updateBySecurity/' + homeId+ '/' + securityCost,
    securityCost,{observe: 'response'})
  }

  updatemonthlyCostHome(homeId:number, monthlyCost : number){
    return this.http.put(baseUrl+'home/updateByCost/' + homeId+ '/' + monthlyCost,
    monthlyCost,{observe: 'response'})
  }

  fetchHomeByLocation(homeId: number,location : string){
    return this.http.get(baseUrl+'home/location/' + location )
  }

  fetchHomeByType(homeId: number, type: string){
    return this.http.get(baseUrl + 'home/type/' + type)
  }

  addTenant(tenant: any, email: string){
    return this.http.post(baseUrl+ 'tenant/email/' + email,
    tenant, {observe: 'response'})
  }

  fetchTenantByEmail(email:string)
  {
    return this.http.get(baseUrl + 'tenant/email/' + email)
  }
  addInterestedHome(home : any, email: string, homeid: number){
      return this.http.put(baseUrl+ 'tenant/interestedHome/' + email + '/' + homeid,
      home, {observe : 'response'})
  }

  fetchAllTenants(){
    return this.http.get(baseUrl+ 'tenant')
  }

  fetchInterestedHomes(email: string){
    return this.http.get(baseUrl + 'tenant/viewInterestedHomes/' + email);
  }

  fetchAllInterestedHomes(){
    return this.http.get(baseUrl + 'interestedHomes')
  }

  fetchInterestedTenants(homeid : number){
    return this.http.get(baseUrl + 'home/interestedTenants/' + homeid)
  }


}



