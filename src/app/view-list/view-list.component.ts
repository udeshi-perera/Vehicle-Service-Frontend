import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from '../model/vehicle';
import { ViewListService } from '../services/view-list.service';
import { VehicleDetail } from '../VehicleDetail'

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// } 

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
// ];


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
//   ELEMENT_DATA: VehicleDetail[]=[];
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//  dataSource = this.ELEMENT_DATA;
public vehicles: Vehicle[] = [];
dataSource = new MatTableDataSource<Vehicle>();

allVehicle:any;
  constructor(private service:ViewListService) { }

  ngOnInit(): void {
    this.getAllVehicleData();
  }

  public viewVehicleDetail(){
  

  }

  getAllVehicleData() {
    console.log("vehicle")
    this.service.getAllVehicle().then(data =>{
     
      this.vehicles = data;
    }).catch( error =>{
      console.log(error);
      
    });
  }

}
