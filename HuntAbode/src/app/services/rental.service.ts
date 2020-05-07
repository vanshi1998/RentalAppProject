import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8001/';

@Injectable({
  providedIn: 'root'
})

export class RentalService {

  constructor(private http: HttpClient) { }

  fetchAllProperties(){
      return this.http.get(baseUrl+'home');
  }

  fetchAllOwners(){
    return this.http.get(baseUrl+'owner');
  }

  fetchPropertryCertain(email:string){
    return this.http.get(baseUrl+'home/email/'+email)
  }

  deleteHome(id: number){
    return this.http.delete(baseUrl + 'home/id/' +id, {observe : 'response'})
  }

  /* For now "any" type has been used, can be updated after creating specific models.  */

  addHouseOwner(houseOwner: any,email:string){
    console.log('Check : ', houseOwner)
    return this.http.post(baseUrl+'owner/email/'+email, 
      houseOwner,{observe : 'response'})

  }

  addPropertyCertain(property: any, email:string){
    console.log('Check : ', property)
    return this.http.put(baseUrl+'home/email/'+email,
      property,{observe: 'response'})
  }

  }



