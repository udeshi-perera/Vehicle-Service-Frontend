import { Injectable } from '@angular/core';
import { GraphQLClient } from 'graphql-request';
import { SEARCH_VEHICLE_BY_MODEL } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class SearchVehicleService {
  client = new GraphQLClient('http://localhost:3000/graphql');
  
  constructor() { }

  async searchVehicle(model:string){
    console.log(model);
    const res = await this.client.request(SEARCH_VEHICLE_BY_MODEL,{"model":model}).then(data=>{
      console.log(data);
      return data;
    }).catch(error=>{
      console.log(error);
      return error;
    })
    return res;
  }
}
