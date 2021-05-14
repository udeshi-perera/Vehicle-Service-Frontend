import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import {io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  readonly uri:string = 'http://localhost:4000'
  constructor() { 
    this.socket = io(this.uri);
  }

  listen(eventName:string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data)=>{
        subscriber.next(data)
      })
    })
  }

  emit(eventName:string,data:any){
    console.log("socket service");
    this.socket.emit(eventName,data);
    
  }
}
