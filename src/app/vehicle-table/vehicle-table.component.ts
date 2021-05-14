import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { IVehicle, Vehicle } from '../model/vehicle';
import { ViewListService } from '../services/view-list.service';
import { VehicleDataComponent } from '../vehicle-data/vehicle-data.component';
import { VehicleTableDataSource } from './vehicle-table-datasource';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements AfterViewInit,OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IVehicle>;
  dataSource: VehicleTableDataSource = new VehicleTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName','lastName','email','carMake','carModel','vinNumber','manufacturedDate','edit','delete'];

 
  public vehicles: Vehicle[] = [];
  vid!: number;
  vfname = '';
  vlname = '';
  vmail = '';
  vmake = '';
  vmodel = '';
  vnumber = '';
  pstartdate!: string;


  constructor(private service:ViewListService,private router: Router) {
    
  }
  ngOnInit(): void {
    console.log("ji");
    this.getAllVehicleData();
  }

  getAllVehicleData() {
    this.service.getAllVehicle().then(data =>{
    
      this.vehicles = data;
      console.log("hello"+ this.vehicles[3].carMake);
      
      this.dataSource.data =this.vehicles;
      this.dataSource.connect();
      
    }).catch( error =>{
      console.log(error);
      
    });
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     this.table.dataSource = this.dataSource;
  }

  deleteVehicle(id){
     //console.log(id)
    this.service.deleteVehicle(id);
  }

  editVehicle(id){
    this.service.updateData(id);
    this.router.navigate(['/edit',id]);
  }

}
