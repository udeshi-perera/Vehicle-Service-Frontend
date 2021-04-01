import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewListService {

  constructor(private http:HttpClient) { }

  public viewTableData(){
    
  }
}
