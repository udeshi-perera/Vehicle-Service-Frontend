import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import request, { GraphQLClient } from 'graphql-request';
import { BehaviorSubject } from 'rxjs';
import { DELETE_VEHICLE, EXPORT_CSV_fILE, GET_ALL_VEHICLE, GET_VEHICLE_DETAIL, UPDATE_VEHICLE, Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ViewListService {

  client = new GraphQLClient('http://localhost:3000/graphql');
  endpoint: string = 'http://localhost:3000/graphql';

  fileExportClient= new GraphQLClient('http://localhost:3001/graphql');
  constructor(private http:HttpClient) { }

  public viewTableData(){
    
  }

  allVehicle:any;
  private content = new BehaviorSubject<any>("");
  public share = this.content.asObservable();

  updateData(text){
    this.content.next(text);
  }

  async getAllVehicle() :Promise<Vehicle[]> {
   
    const res = await this.client.request(GET_ALL_VEHICLE).then(data => {
      return data.getVehicles;
    }).catch(error =>{
      console.log(error);
      return error;
    });
    return res;
}

async deleteVehicle(id:number){
  console.log(id);
  const res = await this.client.request(DELETE_VEHICLE,{"id" : id}).then(data=>{
    console.log("hiii "+id);
    return data;
  }).catch(error =>{
    console.log(id);
    console.log(error);
    return error;
  });
  console.log(res);
return res;
}

async viewDataById(id:number){
  const res = await this.client.request(GET_VEHICLE_DETAIL,{"id":id}).then(data=>{
    // console.log(data);
    return data;
  }).catch(error=>{
    console.log(error);
    return error;
  });
  return res;
}

async exportDataByAge(ageOfVehicle:number){
  // console.log("file export");
  // var age=parseInt(ageOfVehicle);
  const res = await this.http.get(`http://localhost:3001/${ageOfVehicle}`).subscribe(data=>{
    return data;
  })
  return res;
}

async updateVehicle(vehicle){
  //console.log(vehicle);
  const res = await this.client.request(UPDATE_VEHICLE,{"id":vehicle.id,"firstName":vehicle.firstName,
  "lastName":vehicle.lastName,"email":vehicle.email,"carMake":vehicle.carMake,
  "carModel":vehicle.carModel,"vinNumber":vehicle.vinNumber,"manufacturedDate":vehicle.manufacturedDate})
  .then(data=>{
return data;
  }).catch(error=>{
    console.log(error);
    return error;
  });
  console.log(res);
  return res;
}


}
