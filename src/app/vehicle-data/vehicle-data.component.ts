import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { ViewListService } from '../services/view-list.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent implements OnInit {
id:number;
public vehicles: Vehicle;


  constructor(private service:ViewListService) { }

  // private setValue(data: Vehicle) {
  //   this.vid = data.id;
  //   this.vfname = data.firstName;
  //   this.vlname = data.lastName;
  //   this.vmail = data.email;
  //   this.vmake = data.carMake;
  //   this.vmodel = data.carModel;
  //   this.vnumber = data.vinNumber;
  //   this.pstartdate = data.manufacturedDate;
  // }


  ngOnInit(): void {
  this.service.share.subscribe(x=>this.id=x);
  console.log(this.id)
  this.service.viewDataById(this.id).then(data=>{
    this.vehicles=data.vehicleById;
    console.log(this.vehicles.firstName)
  })
  }

}
