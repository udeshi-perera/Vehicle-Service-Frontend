import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { SearchVehicleService } from '../services/search-vehicle.service';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.css']
})
export class SearchVehicleComponent implements OnInit {
  public vehicles: Vehicle[] = [];
  constructor(private searchService:SearchVehicleService) { }

  ngOnInit(): void {
  }

  searchVehicle(model){
    console.log(model);
    this.searchService.searchVehicle(model).then(data=>{
      console.log(data.searchVehicles)
      this.vehicles=data.searchVehicles;
    }).catch(error=>{
      console.log(error);
    });
  }

}
