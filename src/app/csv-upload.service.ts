import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvUploadService {

  SERVER_URL: string = 'http://localhost:4000';
  constructor(private httpClient: HttpClient) { }

  public upload(formData: FormData): Observable<FormData> {
    console.log(formData)
    return this.httpClient.post<FormData>(`${this.SERVER_URL}/vehicle/csvFile`, formData,{
      reportProgress:true
    });
}
}
