import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewListComponent } from './view-list/view-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' 
import { HttpClientModule} from '@angular/common/http';
import { FileReadComponent } from './file-read/file-read.component'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { AngularFileUploaderModule } from "angular-file-uploader";
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { NotoficationService } from './notofication.service';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    FileReadComponent,
    VehicleTableComponent,
    RootNavComponent,
    SearchVehicleComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    AngularFileUploaderModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
