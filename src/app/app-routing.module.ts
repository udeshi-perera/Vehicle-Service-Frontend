import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileReadComponent } from './file-read/file-read.component';
import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { ViewListComponent } from './view-list/view-list.component';

const routes: Routes = [{
  path: 'viewData',
  component: ViewListComponent
},
{
  path: 'fileRead',
  component: FileReadComponent
},
{
  path: 'vehicleData',
  component: VehicleTableComponent
},
{
  path: 'edit/:id',
  component: VehicleDataComponent
},
{
  path: 'searchVehicle',
  component: SearchVehicleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
