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

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    FileReadComponent,
    VehicleTableComponent
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
    MatDialogModule
  ],
  providers: [NotoficationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
